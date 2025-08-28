# AI Content Creation Platform

A full-stack web application that leverages multiple AI APIs to provide comprehensive content creation tools. Users can generate articles, blog titles, images, remove backgrounds, remove objects from images, and get AI-powered resume reviews.

## 🚀 Features

### ✨ Content Generation
- **Article Generation**: Create comprehensive articles using AI (Gemini 2.0 Flash)
- **Blog Title Generation**: Generate catchy blog titles and headlines
- **Image Generation**: Text-to-image generation using ClipDrop API

### 🖼️ Image Processing
- **Background Removal**: Remove backgrounds from images using Cloudinary AI
- **Object Removal**: Remove specific objects from images with AI precision
- **Cloudinary Integration**: Professional image hosting and transformation

### 📄 Document Analysis
- **Resume Review**: Upload PDF resumes and get AI-powered feedback and suggestions
- **File Processing**: Support for PDF parsing and analysis

### 👥 Community Features
- **Community Gallery**: View and interact with published creations
- **Like System**: Like and unlike community creations
- **Publishing**: Share your AI-generated content with the community

### 🔐 Authentication & Plans
- **Clerk Authentication**: Secure user authentication and management
- **Freemium Model**: Free tier with usage limits, premium unlimited access
- **User Dashboard**: Track your creations and usage

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **React Hot Toast**: Elegant notifications
- **React Markdown**: Markdown rendering support

### Backend
- **Node.js & Express**: RESTful API server
- **PostgreSQL**: Robust relational database
- **Clerk Express**: Server-side authentication middleware
- **Multer**: File upload handling

### AI & Cloud Services
- **Google Gemini 2.0 Flash**: Advanced text generation
- **ClipDrop API**: Text-to-image generation
- **Cloudinary**: Image processing and CDN
- **PDF Parse**: PDF document processing

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images, icons, and asset configurations
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components and routing
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # App entry point
│   └── package.json
├── server/                # Node.js backend
│   ├── configs/           # Database and service configurations
│   ├── controllers/       # API route handlers
│   ├── middlewares/       # Authentication and validation
│   ├── routes/            # API route definitions
│   └── server.js          # Express server setup
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- Clerk account for authentication
- API keys for:
  - Google Gemini API
  - ClipDrop API
  - Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-content-platform.git
   cd ai-content-platform
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` files in both `server/` and `client/` directories:

   **server/.env**
   ```env
   DATABASE_URL=your_postgresql_connection_string
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   CLIPDROP_API_KEY=your_clipdrop_api_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   PORT=3000
   ```

   **client/.env**
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_BASE_URL=http://localhost:3000
   ```

4. **Database Setup**
   
   Create the PostgreSQL database and run the schema:
   ```sql
   CREATE TABLE creations (
     id SERIAL PRIMARY KEY,
     user_id VARCHAR(255) NOT NULL,
     prompt TEXT NOT NULL,
     content TEXT NOT NULL,
     type VARCHAR(50) NOT NULL,
     publish BOOLEAN DEFAULT false,
     likes TEXT[] DEFAULT '{}',
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. **Run the Application**
   ```bash
   # Start the backend server
   cd server
   npm run dev

   # Start the frontend (in a new terminal)
   cd client
   npm run dev
   ```

6. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

## 📖 API Endpoints

### AI Generation
- `POST /api/ai/generate-article` - Generate articles
- `POST /api/ai/generate-blog-title` - Generate blog titles
- `POST /api/ai/generate-image` - Generate images from text
- `POST /api/ai/remove-background` - Remove image backgrounds
- `POST /api/ai/remove-object` - Remove objects from images
- `POST /api/ai/review-resume` - Get AI resume feedback

### User Management
- `GET /api/user/creations` - Get user's creations
- `GET /api/user/get-published-creations` - Get community creations
- `POST /api/user/toggle-like` - Like/unlike creations

## 🎯 Usage

1. **Sign up/Login** using Clerk authentication
2. **Choose a tool** from the dashboard
3. **Generate content** using AI-powered features
4. **Manage your creations** in your personal dashboard
5. **Explore community** creations and engage with likes
6. **Upgrade to premium** for unlimited access

## 🔧 Configuration

### Clerk Setup
1. Create a Clerk application
2. Configure authentication providers
3. Set up webhooks for user management
4. Add API keys to environment variables

### Database Configuration
- Uses PostgreSQL with connection pooling
- Automatic schema management
- Support for user metadata storage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Gemini](https://gemini.google.com) for powerful text generation
- [ClipDrop](https://clipdrop.co) for image generation capabilities  
- [Cloudinary](https://cloudinary.com) for image processing and hosting
- [Clerk](https://clerk.com) for seamless authentication
- [Tailwind CSS](https://tailwindcss.com) for beautiful styling

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact the maintainers.

---

⭐ **Star this repository if you found it helpful!**
