# Content Audit

The brief was to keep **all content exactly as it is** on amaltasspecialschool.in. This file
records how that was done, and what needs a human check before launch.

## ✅ Migrated verbatim

- Contact details, address, phone, email, social links, copyright line
- Navigation and footer menu labels
- All headings, button labels and section titles
- Home: hero eyebrow and title, feature highlights, About points 1 and 4, the Creative Store intro,
  Discover Our School
- The 7 therapies and all of their "About Course" bullet points
- Facilities: every paragraph and the Benefits list
- About: the 12 Programs and Services, Our Approach
- Vision & Mission: the Mission lead and its three points
- Why Us: point titles, and the full text of 4 of the 9 points
- Our Team: the 8 roles
- Chairman Message: headings, point titles, and the Building Capacity text
- All event titles (including the Hindi titles and emoji), dates, times and locations
- Product titles and dates
- **Every image URL**: 34 news images, 100 gallery photos, 16 gift distribution photos, 3 Happy
  Parents images, 2 awards images, plus all therapy, event, product, logo and institution images

## ✅ Page-by-page check against the live site (2 Nov 2026)

Every page of amaltasspecialschool.in was downloaded and compared with `src/data`:

- **All former `VERIFY` paragraphs** (home, about, why us, vision & mission, team, facilities, the three
  leadership messages) were replaced with the exact live wording. No `VERIFY` markers remain.
- **Events**: the live archive has **23 events across 3 pages**. Only the 10 events on page 1 had been
  migrated. All 23 are now in `src/data/events.ts`, each with its date and year, its full description and its photo
  gallery (143 photos), copied from the event pages.
- **Home**: two missing school photos were restored. One is the "Where Caring & Learning Flourish" banner
  (`2025/06/shared-image-1.jpeg`), the other is the Our Pillars background (`2025/05/Our-Pillars-1.jpg`).
  The About intro sentence and the feature lead-ins ("Learning, tailored to every child!" and so on) were added.
- **Products**: each product's one-line description was added.
- **Checked and matching exactly**: the 7 therapy pages, the image galleries (News 34, Photogallery 100,
  Gift Distribution 16, Happy Parents 3, Awards 2, all in the same order), contact details, social links,
  institution links and logos, and the Students PDF.

## 🚩 Placeholder content on the live site (kept, but should be replaced)

| Where                 | Issue                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Home testimonials     | All 3 share one text, which mentions "Escada" (theme demo copy). The names and photos are theme defaults too. The full text is now kept verbatim. |
| Founder Chairman page | The live photo is `dummy-image.jpg`. Replaced locally with the real portrait (`public/images/founder-chairman.jpg`). |
| Rating                | Home shows **4.9/5.0** and Contact shows **4.7/5.0**. Both are kept as published.          |
| Therapy pages         | LMS leftovers: "Price: Free", instructor "H" / hemant@offbeatinfotech.com, "Enrolled: 0". Only "Free" and "All Levels" were kept. |
| Event times           | "12:00 am – 12:00 am" (empty) times were dropped. Real times (e.g. 11:00 am – 4:00 pm) were kept. |
| Admission / Success Stories | Pointed to `#` on the live site. Admission now links to the tour form. Success Stories had no content to migrate. |
| About page            | Theme demo blocks (teachers "Cameron Williamson" etc., "78,900+ Students & Organizations", partner logos) were **not** migrated, because they are not real school data. Restore them from the live About page if the school wants them. |
| Privacy / Terms       | The legal text was not extracted. These pages link to the live versions; paste the text into `src/pages/Misc.tsx`. |
| Library images        | The Facilities page labelled them without image tags. The files from the Photogallery (`library1–3.jpg`) are used instead. |
