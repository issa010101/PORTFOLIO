import * as React from 'react'; // or import React from 'react';
import { useState } from 'react';
import { User } from 'lucide-react';

// Définition de l'interface pour les traductions
interface Translations {
  fr: { title: string; name: string; email: string; password: string; confirmPassword: string; address: string; phone: string; submit: string; };
  en: { title: string; name: string; email: string; password: string; confirmPassword: string; address: string; phone: string; submit: string; };
  ja: { title: string; name: string; email: string; password: string; confirmPassword: string; address: string; phone: string; submit: string; };
}

// Déclaration des traductions pour chaque langue
const translations: Translations = {
  fr: {
    title: "Inscription Utilisateur",
    name: "Nom",
    email: "Email",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    address: "Adresse",
    phone: "Téléphone",
    submit: "S'inscrire",
  },
  en: {
    title: "User Signup",
    name: "Name",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    address: "Address",
    phone: "Phone",
    submit: "Sign Up",
  },
  ja: {
    title: "ユーザー登録",
    name: "名前",
    email: "メールアドレス",
    password: "パスワード",
    confirmPassword: "パスワード（確認）",
    address: "住所",
    phone: "電話番号",
    submit: "登録する",
  },
};

const UserSignupPage: React.FC = () => {
  const [language, setLanguage] = useState<'fr' | 'en' | 'ja'>('fr');
  const t = translations[language];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError(t.password + " ne correspond pas avec " + t.confirmPassword);
      return;
    }

    setLoading(true);
    // Simulate API call
    try {
      // Here you would typically make an API call
      console.log("User signed up:", formData);
      // Reset form or redirect user
    } catch (err) {
      setError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'fr' | 'en' | 'ja')}
          className="border rounded-md px-2 py-1"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
      </div>
      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <User className="text-blue-500 mr-2" size={32} />
          <h2 className="text-2xl font-semibold">FoodDelivery</h2>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">{t.name}</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">{t.email}</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">{t.password}</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium">{t.confirmPassword}</label>
            <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="address" className="block mb-1 font-medium">{t.address}</label>
            <input type="text" id="address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">{t.phone}</label>
            <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300" disabled={loading}>
            {loading ? 'Chargement...' : t.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignupPage;
