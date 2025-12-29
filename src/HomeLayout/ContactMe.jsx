import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== TOP INFO CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaMapMarkerAlt />,
              title: "Location",
              text: "Dhaka, Bangladesh",
            },
            {
              icon: <FaPhoneAlt />,
              title: "Phone",
              text: "+880 1234 567 890",
            },
            {
              icon: <FaFax />,
              title: "Fax",
              text: "+880 9876 543 210",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              text: "hello@example.com",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-black/60 backdrop-blur-xl
                border border-white/10
                rounded-xl p-6 text-center
                shadow-[0_10px_30px_rgba(132,204,22,0.15)]
              "
            >
              <div className="text-3xl text-lime-400 mx-auto mb-3">
                {item.icon}
              </div>
              <h4 className="text-white font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-400 mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2 gap-12
            bg-black/50 backdrop-blur-xl
            rounded-2xl p-10
            border border-white/10
          "
        >
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in <span className="text-lime-400">Touch</span>
            </h2>

            <p className="text-gray-400 mb-6">
              I’m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <p className="text-gray-500 text-sm mb-8">
              Feel free to reach out if you have a question or just want to say hi.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="
                      w-10 h-10 rounded-full
                      flex items-center justify-center
                      border border-lime-400/30
                      text-lime-400
                      transition-all duration-300
                      hover:bg-lime-400 hover:text-black
                    "
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="input input-bordered w-full bg-transparent text-white"
              />
              {errors.email && (
                <span className="text-red-400 text-xs">Email is required</span>
              )}
            </div>

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full bg-transparent text-white"
              />
              {errors.name && (
                <span className="text-red-400 text-xs">Name is required</span>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                {...register("message", { required: true })}
                className="textarea textarea-bordered w-full bg-transparent text-white"
              />
              {errors.message && (
                <span className="text-red-400 text-xs">
                  Message is required
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                btn w-full
                bg-linear-to-r from-emerald-500 to-lime-500
                border-none text-black font-semibold
                hover:scale-[1.02] transition-all duration-300
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
