import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";
import { blogPostsData } from "./data/blog-posts";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contacts = new Map();
    
    // Initialize with sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    blogPostsData.forEach(post => {
      const id = randomUUID();
      const blogPost: BlogPost = { ...post, id };
      this.blogPosts.set(id, blogPost);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.category.toLowerCase() === category.toLowerCase())
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const blogPost: BlogPost = { ...insertBlogPost, id };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt,
      phone: insertContact.phone || null
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
}

export const storage = new MemStorage();
