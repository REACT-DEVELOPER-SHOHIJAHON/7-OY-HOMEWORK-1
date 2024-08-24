import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">About Me</h1>
        <p className="text-lg mb-6 text-gray-600">
          Men Najot ta'lim da 6 oydan beri o'qib kelmoqdaman va men hozirda TUIT
          universitetida 2-kursni tamomladim. Kelajakda React Js dasturchi
          bo'lib yetishib chiqish niyatim bor.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          React Js haqida ma'lumot
        </h2>
        <p className="text-lg text-gray-700">
          React — JavaScript dasturlash tilining kutubxonasi hisoblanib,
          interaktiv veb-sahifalarni yaratishda foydalaniladi. React asosan bir
          sahifali va ko'p sahifali ilovalar uchun interfeyslarni yaratish va
          katta saytlarni ishlab chiqish uchun ishlatiladi. React'ning yordami
          bilan Netflix streaming xizmati yozildi va eng yirik ijtimoiy
          tarmoqlarning yangiliklar sahifalari joriy etila boshladi. Yandex,
          Uber, Sberbank, Avito, va BBC kabi yirik kompaniyalar foydalangan.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Contact Us
        </h2>
        <p className="text-lg mb-4 text-gray-700">
          Agar sizda biron bir savol bo'lsa yoki ishimiz haqida ko'proq
          bilmoqchi bo'lsangiz, iltimos biz bilan bog'lanishdan tortinmang. Biz
          intiqlik bilan kutamiz!
        </p>
        <p className="text-lg text-gray-700">
          <strong>Email:</strong> gulomovshohijahon32@gmail.com
          <br />
          <strong>Phone:</strong> (+99890) 829-44-01
        </p>
      </section>
    </div>
  );
};

export default About;
