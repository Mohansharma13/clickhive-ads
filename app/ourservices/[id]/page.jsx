import { services } from "@components/Api/OurserviceApi";
import Link from "next/link";
import "@styles/OurserviceCardPage.css";

export async function generateStaticParams() {
  return services.map((_, index) => ({
    id: index.toString(),
  }));
}

export default async function OurservicesCard({ params }) {
  // Await the params promise before accessing its properties
  const { id } = await params;
  const serviceId = parseInt(id, 10);
  const service = services[serviceId];

  if (!service) {
    return (
      <div className="service-details not-found">
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist.</p>
        <Link href="/ourservices">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-details-wrapper">
      <div className="service-details">
        <h1 className="service-title">{service.title}</h1>
        <img
          src={`/ourservice-image/${service.title}.jpg`}
          alt={service.title}
          className="service-image"
        />
        <div className="service-content">
          <p className="description">{service.description}</p>
          <p className="about">{service.about}</p>
        </div>
      </div>
      <div className="back-button-container">
        <Link href="/ourservices">
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
}