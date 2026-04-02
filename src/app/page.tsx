"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import { Code, Edit, FileText, Layout, Mail, MessageCircle, MessageSquare, MousePointer, RefreshCw, Rocket, Search, Smartphone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Servicii",
          id: "#servicii",
        },
        {
          name: "Proces",
          id: "#proces",
        },
        {
          name: "Portofoliu",
          id: "#portofoliu",
        },
        {
          name: "Prețuri",
          id: "#preturi",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Web Designer RO"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Website-uri Moderne pentru Afacerea Ta"
      description="Ajut afacerile locale și brandurile personale să construiască încredere, să arate profesional online și să atragă mai mulți clienți prin site-uri web elegante și responsive."
      testimonials={[
        {
          name: "Ion Popescu",
          handle: "@afacere",
          testimonial: "Un site web excelent, mi-a crescut vânzările imediat.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111393.jpg?_wi=1",
          imageAlt: "minimalist desk workspace laptop",
        },
        {
          name: "Maria Ionescu",
          handle: "@salon",
          testimonial: "Profesionalism și rapiditate în realizarea site-ului.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-casual-shirt-working-computer-office_93675-134958.jpg?_wi=1",
          imageAlt: "portrait professional developer",
        },
        {
          name: "Andrei Dumitru",
          handle: "@service",
          testimonial: "Design modern care atrage clienți noi zilnic.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-ordering-groceries-online_23-2149722290.jpg?_wi=1",
          imageAlt: "website design laptop mockup",
        },
        {
          name: "Elena Vasile",
          handle: "@brand",
          testimonial: "Colaborare ușoară și un site care arată impecabil.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/nature-cosmetics-landing-page_23-2148627452.jpg?_wi=1",
          imageAlt: "salon website design mockup",
        },
        {
          name: "Mihai Radu",
          handle: "@magazin",
          testimonial: "Rezultate peste așteptări, recomand cu drag!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-psd/monochrome-restaurant-landing-page-template_23-2149439193.jpg?_wi=1",
          imageAlt: "modern cafe website mockup",
        },
      ]}
      buttons={[
        {
          text: "Solicită o Ofertă",
          href: "#contact",
        },
        {
          text: "Contactează-mă",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111393.jpg?_wi=2"
      imageAlt="Designer web lucrând la un proiect profesional"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111393.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-casual-shirt-working-computer-office_93675-134958.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-man-ordering-groceries-online_23-2149722290.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-vector/nature-cosmetics-landing-page_23-2148627452.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-psd/monochrome-restaurant-landing-page-template_23-2149439193.jpg",
          alt: "Client 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Rapiditate",
        },
        {
          type: "text",
          text: "Design Modern",
        },
        {
          type: "text",
          text: "SEO Friendly",
        },
        {
          type: "text",
          text: "Mobile First",
        },
        {
          type: "text",
          text: "Conversii Ridicate",
        },
      ]}
    />
  </div>

  <div id="servicii" data-section="servicii">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Site-uri de Prezentare",
          description: "Site-uri elegante care spun povestea afacerii tale.",
          bentoComponent: "reveal-icon",
          icon: Layout,
          imageSrc: "http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111393.jpg?_wi=3",
          imageAlt: "minimalist desk workspace laptop",
        },
        {
          title: "Landing Pages",
          description: "Pagini optimizate pentru conversii ridicate.",
          bentoComponent: "reveal-icon",
          icon: MousePointer,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-casual-shirt-working-computer-office_93675-134958.jpg?_wi=2",
          imageAlt: "portrait professional developer",
        },
        {
          title: "Redesign Website",
          description: "Actualizarea site-urilor vechi pentru standardele actuale.",
          bentoComponent: "reveal-icon",
          icon: RefreshCw,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-ordering-groceries-online_23-2149722290.jpg?_wi=2",
          imageAlt: "website design laptop mockup",
        },
        {
          title: "Design Mobile-First",
          description: "Site-uri care arată perfect pe orice dispozitiv.",
          bentoComponent: "reveal-icon",
          icon: Smartphone,
          imageSrc: "http://img.b2bpic.net/free-vector/nature-cosmetics-landing-page_23-2148627452.jpg?_wi=2",
          imageAlt: "salon website design mockup",
        },
        {
          title: "Integrare WhatsApp/Contact",
          description: "Conectează-te ușor cu clienții tăi.",
          bentoComponent: "reveal-icon",
          icon: MessageCircle,
          imageSrc: "http://img.b2bpic.net/free-psd/monochrome-restaurant-landing-page-template_23-2149439193.jpg?_wi=2",
          imageAlt: "modern cafe website mockup",
        },
        {
          title: "Mentenanță SEO",
          description: "Configurare SEO de bază și întreținere site.",
          bentoComponent: "reveal-icon",
          icon: Search,
          imageSrc: "http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111393.jpg?_wi=4",
          imageAlt: "minimalist desk workspace laptop",
        },
      ]}
      title="Servicii Profesionale de Design Web"
      description="Soluții complete pentru a-ți pune afacerea pe hartă cu un site web modern și performant."
    />
  </div>

  <div id="proces" data-section="proces">
      <FeatureBento
      textboxLayout="split-description"
      useInvertedBackground={false}
      features={[
        {
          title: "Discuție",
          description: "Înțelegem obiectivele tale.",
          bentoComponent: "reveal-icon",
          icon: MessageSquare,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-casual-shirt-working-computer-office_93675-134958.jpg?_wi=3",
          imageAlt: "portrait professional developer",
        },
        {
          title: "Ofertă",
          description: "Primim o ofertă clară și transparentă.",
          bentoComponent: "reveal-icon",
          icon: FileText,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-ordering-groceries-online_23-2149722290.jpg?_wi=3",
          imageAlt: "website design laptop mockup",
        },
        {
          title: "Design & Dezvoltare",
          description: "Construiesc site-ul visat.",
          bentoComponent: "reveal-icon",
          icon: Code,
          imageSrc: "http://img.b2bpic.net/free-vector/nature-cosmetics-landing-page_23-2148627452.jpg?_wi=3",
          imageAlt: "salon website design mockup",
        },
        {
          title: "Revizii",
          description: "Ajustăm totul pentru perfecțiune.",
          bentoComponent: "reveal-icon",
          icon: Edit,
          imageSrc: "http://img.b2bpic.net/free-psd/monochrome-restaurant-landing-page-template_23-2149439193.jpg?_wi=3",
          imageAlt: "modern cafe website mockup",
        },
        {
          title: "Lansare",
          description: "Site-ul tău este live pe web.",
          bentoComponent: "reveal-icon",
          icon: Rocket,
          imageSrc: "http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111393.jpg?_wi=5",
          imageAlt: "minimalist desk workspace laptop",
        },
      ]}
      title="Proces Simplificat"
      description="Știu că timpul tău este prețios. De aceea, procesul meu este transparent și eficient."
    />
  </div>

  <div id="portofoliu" data-section="portofoliu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Business Local",
          name: "Site Prezentare Firmă",
          price: "Modern",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-ordering-groceries-online_23-2149722290.jpg?_wi=4",
        },
        {
          id: "2",
          brand: "Beauty Salon",
          name: "Platformă Rezervări",
          price: "Elegant",
          rating: 5,
          reviewCount: "8",
          imageSrc: "http://img.b2bpic.net/free-vector/nature-cosmetics-landing-page_23-2148627452.jpg?_wi=4",
        },
        {
          id: "3",
          brand: "Cafenea",
          name: "Site Restaurant",
          price: "Minimal",
          rating: 5,
          reviewCount: "15",
          imageSrc: "http://img.b2bpic.net/free-psd/monochrome-restaurant-landing-page-template_23-2149439193.jpg?_wi=4",
        },
      ]}
      title="Proiecte Recente"
      description="Iată câteva exemple de site-uri web construite pentru clienții mei."
    />
  </div>

  <div id="preturi" data-section="preturi">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Start",
          price: "€300",
          subtitle: "Ideal pentru startup-uri",
          features: [
            "Design modern",
            "Responsive",
            "1 pagină",
            "SEO de bază",
            "Formular contact",
          ],
          buttons: [
            {
              text: "Alege Basic",
              href: "#contact",
            },
          ],
        },
        {
          id: "standard",
          badge: "Popular",
          price: "€600",
          subtitle: "Cea mai bună alegere",
          features: [
            "Până la 5 pagini",
            "Design personalizat",
            "Integrare social media",
            "Mentenanță 1 lună",
            "Optimizare viteză",
          ],
          buttons: [
            {
              text: "Alege Standard",
              href: "#contact",
            },
          ],
        },
        {
          id: "premium",
          badge: "Pro",
          price: "€1000+",
          subtitle: "Pentru companii",
          features: [
            "Site complex",
            "CMS avansat",
            "Mentenanță 3 luni",
            "SEO avansat",
            "Training administrare",
          ],
          buttons: [
            {
              text: "Alege Premium",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Pachete Simple"
      description="Prețuri clare pentru afaceri care vor rezultate reale."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Despre Mine",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/young-man-casual-shirt-working-computer-office_93675-134958.jpg",
          alt: "Web designer la lucru",
        },
        {
          type: "text",
          content: "Sunt un creator de site-uri pasionat de tehnologie și design curat. Scopul meu este să ajut antreprenorii români să aibă o prezență digitală care nu doar arată bine, ci aduce clienți noi.",
        },
      ]}
      buttons={[
        {
          text: "Contactează-mă",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Cât durează un site?",
          content: "În medie, un site de prezentare durează între 1 și 3 săptămâni.",
        },
        {
          id: "2",
          title: "Cât costă întreținerea?",
          content: "Mentenanța depinde de nevoile tale, oferim pachete lunare accesibile.",
        },
        {
          id: "3",
          title: "Oferi suport după lansare?",
          content: "Da, sunt alături de clienții mei și după lansarea site-ului pentru orice modificare.",
        },
      ]}
      ctaTitle="Să Lucrăm Împreună!"
      ctaDescription="Ești gata să îți transformi afacerea online? Trimite-mi un mesaj pentru o discuție gratuită."
      ctaButton={{
        text: "Trimite Mesaj",
        href: "mailto:designer@email.ro",
      }}
      ctaIcon={Mail}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Navigare",
          items: [
            {
              label: "Servicii",
              href: "#servicii",
            },
            {
              label: "Portofoliu",
              href: "#portofoliu",
            },
            {
              label: "Prețuri",
              href: "#preturi",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/407",
            },
            {
              label: "Email",
              href: "mailto:designer@email.ro",
            },
            {
              label: "Telefon",
              href: "tel:+407",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Web Designer RO. Toate drepturile rezervate."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
