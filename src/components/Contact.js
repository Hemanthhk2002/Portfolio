export default function Contact() {
  const config = {
    email: "hemanthkumarv2k02@gmail.com",
    phone: "+917397268063",
  };
  const whatsappUrl = `https://wa.me/7397268063`;

  return (
    <section
      id="Contact"
      className="flex flex-col px-5 py-32 text-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          If you want to discuss more in detail, please contact me
        </p>
        <a
          className="hover:text-gray-500"
          href="mailto:hemanthkumarv2k02@gmail.com?subject=Hello%20there&body=This%20is%20a%20predefined%20email%20body."
        >
          hemanthkumarv2k02@gmail.com
        </a>
        <p className="py-2 hover:text-gray-500">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            +917397268063
          </a>
        </p>
      </div>
    </section>
  );
}
