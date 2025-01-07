# Complaint Management Web App

## 📋 Overview
A web application developed for managing student complaints to the Student Union Government (SUG). This system streamlines the process of submitting, tracking, and resolving student complaints within the academic institution.

## ⭐ Features
- Student authentication and authorization
- Complaint submission with categories
- Real-time status tracking
- SUG admin dashboard
- Response management system
- Email notifications
- User profile management

## 🛠️ Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Template Engine:** Pug
- **Frontend:** HTML, CSS, JavaScript
- **Deployment:** Render
- **Version Control:** Git & GitHub

## 📥 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/complaint-management-webapp.git
cd complaint-management-webapp
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password
```

4. Start the development server
```bash
npm run dev
```

## 💻 Usage

### For Students
1. Register/Login to your account
2. Navigate to the "Submit Complaint" section
3. Fill in the complaint details
4. Track your complaint status
5. View and respond to SUG feedback

### For SUG Administrators
1. Login to admin dashboard
2. View all submitted complaints
3. Process and respond to complaints
4. Update complaint status
5. Generate reports

## 🌐 API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - User login

### Complaints
- GET `/api/complaints` - Get all complaints
- POST `/api/complaints` - Submit new complaint
- GET `/api/complaints/:id` - Get specific complaint
- PUT `/api/complaints/:id` - Update complaint
- DELETE `/api/complaints/:id` - Delete complaint

## 📊 Project Structure
```
complaint-management-webapp/
├── config/
├── controllers/
├── middlewares/
├── models/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── routes/
├── views/
├── .env
├── .gitignore
├── app.js
└── package.json
```

## 🔐 Environment Variables
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/complaints
JWT_SECRET=your_secret_key
```

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact
Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/complaint-management-webapp](https://github.com/yourusername/complaint-management-webapp)

Live Demo: [https://www.your-live-app-link.com](https://www.your-live-app-link.com)

### ✅ **Next Steps:**  
1. Replace placeholders like `yourusername`, `your.email@example.com`, and the live app URL (`https://www.your-live-app-link.com`).  
2. Save this as `README.md` in your repository root.  
3. Commit and push:  
   ```bash
   git add README.md  
   git commit -m "Add README for Complaint Management Web App"  
   git push origin main
   ```
