import * as React from 'react';
import { useState } from 'react';
import { Image, Menu as MenuIcon } from 'lucide-react';

// Interface for translations
interface Translations {
  fr: { title: string; editProfile: string; uploadImages: string; manageMenu: string; viewOrders: string; save: string; };
  en: { title: string; editProfile: string; uploadImages: string; manageMenu: string; viewOrders: string; save: string; };
  ja: { title: string; editProfile: string; uploadImages: string; manageMenu: string; viewOrders: string; save: string; };
}

// Translations
const translations: Translations = {
  fr: {
    title: "Tableau de bord du restaurant",
    editProfile: "Modifier le profil",
    uploadImages: "Télécharger des images",
    manageMenu: "Gérer le menu",
    viewOrders: "Voir les commandes",
    save: "Enregistrer",
  },
  en: {
    title: "Restaurant Dashboard",
    editProfile: "Edit Profile",
    uploadImages: "Upload Images",
    manageMenu: "Manage Menu",
    viewOrders: "View Orders",
    save: "Save",
  },
  ja: {
    title: "レストランダッシュボード",
    editProfile: "プロフィール編集",
    uploadImages: "画像アップロード",
    manageMenu: "メニュー管理",
    viewOrders: "注文確認",
    save: "保存",
  },
};

const RestaurantDashboard: React.FC = () => {
  const [language, setLanguage] = useState<'fr' | 'en' | 'ja'>('fr');
  const [restaurantName, setRestaurantName] = useState('');
  const [description, setDescription] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [images, setImages] = useState<File[]>([]); // State for images

  const t = translations[language];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setImages(files);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ restaurantName, description, cuisine, images });
    // Reset form or show a success message after submission
  };

  return (
    <div className="max-w-4xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">{t.editProfile}</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="restaurantName" className="block mb-1 font-medium">Nom du restaurant</label>
                <input
                  type="text"
                  id="restaurantName"
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-1 font-medium">Description</label>
                <textarea
                  id="description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="cuisine" className="block mb-1 font-medium">Type de cuisine</label>
                <input
                  type="text"
                  id="cuisine"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                {t.save}
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">{t.uploadImages}</h2>
            <div className="border-dashed border-2 border-gray-300 p-4 text-center">
              <Image size={48} className="mx-auto mb-2 text-gray-400" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                multiple
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="cursor-pointer text-blue-500 hover:underline"
              >
                Glissez-déposez vos images ici ou cliquez pour sélectionner
              </label>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">{t.manageMenu}</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center">
            <MenuIcon className="mr-2" />
            {t.manageMenu}
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">{t.viewOrders}</h2>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
            {t.viewOrders}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;
