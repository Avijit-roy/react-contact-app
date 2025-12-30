# react-contact-app

A simple, responsive contact management application built with React. Manage your contacts with ease—add, edit, delete, and search all from a clean, intuitive interface. Perfect as a starter project that you can extend with a backend, authentication, or additional features.

## Features

- ✨ **Add contacts** with name, phone, email, and optional notes
- ✏️ **Edit existing contacts** with instant updates
- 🗑️ **Delete contacts** with confirmation
- 🔍 **Search and filter** contacts in real time
- 📱 **Fully responsive** design for desktop, tablet, and mobile
- 💾 **Local data persistence** via browser localStorage
- ⚡ **Fast and lightweight** with vanilla JavaScript and React

## Tech Stack

- **React** — Modern component-based UI library
- **JavaScript (ES6+)** — Core application logic
- **HTML5** — Semantic markup
- **CSS3** — Responsive styling

**Repository composition:** ~90% JavaScript, ~8% HTML, ~2% CSS

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avijit-roy/react-contact-app.git
   cd react-contact-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to that URL

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run app in development mode with hot reload |
| `npm run build` | Create optimized production build |
| `npm test` | Run test suite (if configured) |
| `npm run eject` | Eject from Create React App (irreversible) |

## Project Structure

```
react-contact-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ContactForm.js      # Form for adding/editing contacts
│   │   ├── ContactList.js      # Display list of contacts
│   │   ├── ContactItem.js      # Individual contact card
│   │   └── SearchBar.js        # Search/filter input
│   ├── styles/
│   │   └── App.css             # Application styles
│   ├── App.js                  # Main App component
│   ├── index.js                # React entry point
│   └── index.css               # Global styles
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

## Data Persistence

Contacts are stored in your browser's **localStorage**, so your data persists between sessions automatically.

**To reset all data:**
- Open browser DevTools → Application → Local Storage
- Find the site entry and delete the `contacts` key
- Or use the reset function in the app (if available)

## Customization & Extensions

### Add New Contact Fields
Update `ContactForm.js` to include additional fields (e.g., address, company, birthday) and modify the contact data structure accordingly.

### Connect a Backend
Replace localStorage with API calls:
```javascript
// Example: Fetch contacts from API
const fetchContacts = async () => {
  const response = await fetch('/api/contacts');
  const data = await response.json();
  setContacts(data);
};
```

### Enhance Form Validation
Integrate validation libraries like **Formik** or **React Hook Form** for robust error handling and user feedback.

### Add More Features
- Avatar/profile pictures
- Contact categories or tags
- Bulk actions (select multiple, export/import)
- Dark mode toggle
- Contact birthday reminders

## Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes and commit**
   ```bash
   git commit -m "Add: brief description of changes"
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** with a clear description of your changes

Please include tests and update the README if adding significant features.

## Troubleshooting

**Port 3000 already in use?**
```bash
npm start -- --port 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Data not persisting?**
- Check if localStorage is enabled in your browser
- Verify you're not in private/incognito mode (some browsers disable storage there)

## Issues & Feature Requests

Found a bug or have a feature idea? [Open an issue](https://github.com/Avijit-roy/react-contact-app/issues) with:
- Clear description of the issue or request
- Steps to reproduce (for bugs)
- Screenshots or error messages (if applicable)

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## Contact & Support

**Maintainer:** [Avijit-roy](https://github.com/Avijit-roy)

- 💬 Open an issue for questions and feedback
- 🐙 Visit the [GitHub profile](https://github.com/Avijit-roy) for other projects

---

**Happy contact managing!** 🎉 If you find this project useful, consider giving it a ⭐ on GitHub.
