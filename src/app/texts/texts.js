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
        description1: "En Minimercado Mercaldas, nos dedicamos a ofrecer una variedad de víveres, apoyando a productores y comerciantes locales.",
        description2: "Nuestro compromiso es brindar productos frescos y de calidad, contribuyendo al desarrollo de la comunidad."
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
