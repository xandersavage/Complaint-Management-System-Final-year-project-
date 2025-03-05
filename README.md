# Complaint Management Web App

## 📋 Overview
A web application developed for managing student complaints to the Student Union Government (SUG) of the Federal University of Petroleum Resources Effurun. This system streamlines the process of submitting, tracking, and resolving student complaints within the academic institution.

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

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🚀 Live Demo  
Check out the live version of the project here: [Complaint Management Web App](https://fupresugcms.onrender.com/)

## 📧 Contact
Alexander Olomukoro - [swankylex@gmail.com](mailto:swankylex@gmail.com)


