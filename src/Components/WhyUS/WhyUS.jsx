import "./WhyUS.css";

const WhyChooseUs = () => {
  const reasonsData = [
    {
      id: 1,
      icon: String.fromCodePoint(0x1f9e0),
      title: "Experienced Dispatchers",
      description:
        "Our team has years of hands-on experience in trucking logistics, ensuring smart decisions every mile.",
    },
    {
      id: 2,
      icon: String.fromCodePoint(0x26a1),
      title: "Fast Load Booking",
      description:
        "We book loads rapidly so your truck never sits idle keeping your revenue flowing 24/7.",
    },
    {
      id: 3,
      icon: String.fromCodePoint(0x1f4de),
      title: "24/7 Support",
      description:
        "Our dispatchers are always on standby. Any time, any issue we're just a call or message away.",
    },
    {
      id: 4,
      icon: String.fromCodePoint(0x1f4b0),
      title: "Transparent Pricing",
      description:
        "Flat rates and clear percentage plans with no surprise fees you always know what you're paying.",
    },
    {
      id: 5,
      icon: String.fromCodePoint(0x1f6ab),
      title: "No Hidden Charges",
      description:
        "What you see is what you pay. No setup fees, no cancellation traps, no fine print to worry about.",
    },
    {
      id: 6,
      icon: String.fromCodePoint(0x1f4b8),
      title: "Revenue Focused",
      description:
        "We negotiate the best rates and optimize every route to maximize your earnings per mile.",
    },
    {
      id: 7,
      icon: String.fromCodePoint(0x1f4c4),
      title: "Easy Documentation",
      description:
        "We handle all paperwork and documentation so you can focus on driving while we take care of the rest.",
    },
    {
      id: 8,
      icon: String.fromCodePoint(0x1f30d),
      title: "Nationwide Coverage",
      description:
        "We dispatch loads across all 48 states ensuring you always have runs no matter where you are.",
    },
  ];

  return (
    <section className="section-wrap" id="why-us">
      <div className="section-card">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <div className="why-accent-bar"></div>
          <p>
            We're not just a dispatch service we're a growth partner. Here's
            what sets Loadify apart from the rest.
          </p>
        </div>

        <div className="why-grid">
          {reasonsData.map((reason) => (
            <div className="why-card" key={reason.id}>
              <div className="why-icon">{reason.icon}</div>
              <div className="why-body">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
