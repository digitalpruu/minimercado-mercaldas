const title = "Minimercado Mercaldas";
const email = "jbetagi9@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573134318095"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Minimercado Mercaldas, nos dedicamos a ofrecer una amplia gama de víveres y productos esenciales para tu hogar. Nuestro objetivo es proporcionar una experiencia de compra conveniente y accesible, apoyando a productores y comerciantes locales en el proceso. Desde alimentos frescos hasta productos de uso diario, cada artículo en nuestro mercado es seleccionado con cuidado para garantizar la mejor calidad y\n" +
            "frescura. Nos enorgullece ser una opción confiable para todas tus necesidades de víveres. En Mercaldas, creemos en el poder de apoyar a los productores y comerciantes locales, fortaleciendo la economía comunitaria y ofreciendo productos de excelente calidad. ¡Visitanos y descubre cómo nuestro minimercado puede ser parte de tu vida diaria!\n" +
            "¡Te esperamos en Minimercado Mercaldas, donde cada compra apoya a la comunidad y satisface tus necesidades!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Apoyando productores y comerciantes.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/", // Enlace base de Facebook
        instagram: "https://www.instagram.com/", // Enlace base de Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
