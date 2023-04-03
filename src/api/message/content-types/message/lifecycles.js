module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "raulj.camacho@diftinto.com",
        from: "noreply@diftinto.com",
        subject: result.subject,
        text: `Nuevo mensaje desde el formulario de contacto de la web de Raúl ${result.text} de ${result.email}`,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
