import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';

// Inner pages are code-split so the home page stays light.
const About = lazy(() => import('@/pages/About'));
const VisionMission = lazy(() => import('@/pages/VisionMission'));
const MessagePage = lazy(() => import('@/pages/MessagePage'));
const OurTeam = lazy(() => import('@/pages/OurTeam'));
const WhyUs = lazy(() => import('@/pages/WhyUs'));
const Therapies = lazy(() => import('@/pages/Therapies'));
const TherapyDetail = lazy(() => import('@/pages/TherapyDetail'));
const Facilities = lazy(() => import('@/pages/Facilities'));
const Events = lazy(() => import('@/pages/Events'));
const EventDetail = lazy(() => import('@/pages/EventDetail'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const Products = lazy(() => import('@/pages/Products'));
const Contact = lazy(() => import('@/pages/Contact'));
const Students = lazy(() => import('@/pages/Misc').then((m) => ({ default: m.Students })));
const LegalPage = lazy(() => import('@/pages/Misc').then((m) => ({ default: m.LegalPage })));
const NotFound = lazy(() => import('@/pages/NotFound'));

/** Maps old WordPress therapy URLs (/courses/<slug>/) to the new /therapies/<slug> routes. */
function LegacyCourseRedirect() {
  const { slug = '' } = useParams();
  const clean = slug.replace(/__trashed-\d+$/, '');
  return <Navigate to={`/therapies/${clean}`} replace />;
}

function PageFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-leaf-200 border-t-blossom-400" />
    </div>
  );
}

export default function App() {
  return (
    // reducedMotion="user" disables transform animations for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            {/* About */}
            <Route path="about-us" element={<About />} />
            <Route path="vision-mission" element={<VisionMission />} />
            <Route path="founder-chairman-message" element={<MessagePage slug="founder-chairman-message" />} />
            <Route path="chairman-message" element={<MessagePage slug="chairman-message" />} />
            <Route path="principals-message" element={<MessagePage slug="principals-message" />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="why-us" element={<WhyUs />} />
            <Route path="awards-achievements" element={<GalleryPage kind="awards" />} />

            {/* Therapies */}
            <Route path="therapies" element={<Therapies />} />
            <Route path="therapies/:slug" element={<TherapyDetail />} />
            <Route path="courses/:slug" element={<LegacyCourseRedirect />} />

            {/* Facilities & store */}
            <Route path="facilities-and-infrastructure" element={<Facilities />} />
            <Route path="products" element={<Products />} />
            <Route path="category/products" element={<Navigate to="/products" replace />} />
            <Route path="festive-diyas" element={<Navigate to="/products" replace />} />
            <Route path="ganpati-murti" element={<Navigate to="/products" replace />} />
            <Route path="rakhies-crafts" element={<Navigate to="/products" replace />} />

            {/* Explore */}
            <Route path="activities-events" element={<Events />} />
            <Route path="upcoming-events" element={<Events mode="upcoming" />} />
            <Route path="events/:slug" element={<EventDetail />} />
            <Route path="photogallery" element={<GalleryPage kind="photogallery" />} />
            <Route path="amaltas-special-school-in-news" element={<GalleryPage kind="news" />} />
            <Route path="gift-distribution" element={<GalleryPage kind="gift" />} />
            <Route path="happy-parents" element={<GalleryPage kind="parents" />} />
            <Route path="students" element={<Students />} />

            {/* Contact & legal */}
            <Route path="contact-us" element={<Contact />} />
            <Route
              path="privacy-policy"
              element={<LegalPage title="Privacy Policy" legacyUrl="https://amaltasspecialschool.in/privacy-policy/" />}
            />
            <Route
              path="terms-conditions"
              element={<LegalPage title="Terms & Conditions" legacyUrl="https://amaltasspecialschool.in/terms-conditions/" />}
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </MotionConfig>
  );
}
