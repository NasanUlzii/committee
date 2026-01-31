import TopHero from "@/components/home/TopHero";
import PicTextFour from "@/components/PicTextFour";
import React from "react";

function page() {
  return (
    <>
      <div>
        <TopHero
          title="Expected Carer Standards                   "
          text="Discover what it means to be a carer on our platform."
          img="/older/pic18.webp"
          buttonText=""
          hasGroupText={true}
          hasReview={true}
        />
      </div>
      <p className="p-8">
        These standards aim to ensure Care Recipients and Customers receive a
        consistent, high-quality, safe and effective service from Self-Employed
        Carers using the Elder Platform.
      </p>
      <p className="p-8">
        These Standards cannot cover everything that might be relevant and set
        out the minimum standards expected from Self-Employed Carers. For more
        information, read our Expected Carer Standards guide.
      </p>
      <p className="p-8 font-quicksand text-3xl">
        Download a copy of the Expected Carer Standards
      </p>
      <p>
        Click the button below to view and save your own PDF copy of the
        standards we’ve covered on this page. 1. Promote person-centred care
        support, independence and active living At Elder we strongly believe
        Care Recipients have the right to live their own life, on their own
        terms. We expect you to ensure that care is provided in a safe and
        dignified way. As a Self-Employed Carer you should strive to empower
        Care Recipients to live as fully and independently as possible. We
        expect you to take the time to get to know the Care Recipient, discover
        their daily routine and respect their personal boundaries and
        preferences. 2. Practise within your knowledge, skills, and experience
        We trust that Care Recipients are in good hands with you. You should
        only apply to placements which are most suited to your skills,
        knowledge, experience and training. Honesty about your strengths and
        limitations as a Self-Employed Carer will help facilitate success and
        safety for both yourself and the Care Recipient. This requires reading
        placement specifications in full and being comfortable with duties
        outlined in the Care Recipient’s Care Request. It is up to you to seek
        clarification from the Care Recipient/Customer/Family to ensure you
        fully understand placement requirements. Specialist care that you should
        not be undertaking on the platform includes: STOMA care PEG care Wound
        Care Ventilation, Oxygen Support, BiPAP or CPAP Support Unstable
        Epilepsy Controlled Drug Administration Covert Medication Administration
        Glucose readings via finger pricks Injections Pessaries, Enemas,
        Suppositories Active addiction Acute mental health disorders Any actions
        which could be considered a deprivation of liberty (e.g. locking doors
        to prevent someone from leaving their home) 3. Be Respectful We expect
        you to treat everyone with dignity and respect. This also means being
        respectful of the Care Recipient’s home and property. Elder is committed
        to equality of opportunity and Elder offers freedom of choice: carers
        and customers are free to choose who they work for and with, based on
        transparency, honesty and mutual respect. Elder can’t and won’t
        discriminate or tolerate any discrimination against any carer, customer
        or employee. For Elder’s Respect & Anti-discrimination policy, please
        visit this link. 4. Be reliable, accountable and transparent We expect
        you to be reliable and honest, at all times, for matters big and small.
        Accountability and transparency mean being responsible, open and candid,
        especially when any mistakes have taken place. This not only applies to
        your interactions with Care Recipients, Customers, Elder HQ staff but
        also applies to other medical, social care and emergency professionals
        and to any schedule changes, cancellations, planning time off, handovers
        to colleagues and voicing any concerns. We understand that plans can
        unexpectedly change but we expect as much advance notice as possible so
        we can work with Customers to ensure alternative arrangements can be
        made. 5. Be professional and proactive It is important that you present
        yourself professionally whilst on a placement. Work cooperatively and
        proactively with the Care Recipient, Customer and others involved in the
        care and support of the Care Recipient. Report concerns immediately.
        Depending on the nature of your concern, concerns should be raised to
        the Customer, Care Recipient’s health and social care professionals
        (i.e. social worker, GP, or other specialist), or Local Authority
        Safeguarding Team. The primary working relationship is between you and
        the Customer. Should you or the Customer wish to raise concerns to
        Elder, you are free to do so. Personal mobile phones should only be used
        when on a scheduled and agreed break unless there is an emergency. 6.
        Communicate clearly and effectively We expect Self-Employed Carers to
        maintain polite and professional communication when interacting with
        Care Recipients and/or Customers, their families, other Self-Employed
        Carers and the Elder team. This applies to all forms of communication,
        including any care notes or records you and the Care Recipient/Customer
        may choose to implement. If you notice any changes with the Care
        Recipient you should take proactive steps and communicate and discuss
        them with the family, Customer and other professionals. Encourage the
        Care Recipient and/or Customer to update the Care Request, so that the
        Care Request accurately reflects the needs of the Care Recipient. 7.
        Protect and respect the right to confidentiality At Elder we take
        people’s right to confidentiality and data protection very seriously.
        You must maintain confidentiality and not at any time disclose
        information of a confidential or sensitive nature without clear
        authorisation. Confidential and sensitive information includes any
        personal identifying information, address, medical conditions and
        photographs. By not protecting and respecting the Care Recipient’s right
        to confidentiality, you may be breaking GDPR and UK data protection
        laws. For the full version of our Privacy Policy, please visit this
        link.
      </p>
      <div className="flex flex-col lg:flex-row w-full justify-center gap-6 px-4">
        <PicTextFour
          linkText="What self-employed carers can expect from Elder"
          pic="/older/pic1.webp"
          href="/documentation/what-self-employed-carers-can-expect-from-elder"
        />
        <PicTextFour
          linkText="What a self-employed carer can expect from an Elder placement"
          pic="/older/pic1.webp"
          href="/documentation/what-a-self-employed-carer-can-expect-from-an-elder-placement"
        />
        <PicTextFour
          linkText="Safety & Trust at Elder"
          pic="/older/pic1.webp"
          href="/documentation/safety-trust-at-elder"
        />
        <PicTextFour
          linkText="Safeguarding at Elder"
          pic="/older/pic1.webp"
          href="/documentation/safeguarding-at-elder"
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center gap-6 px-4">
        <PicTextFour
          linkText="Elder | Respect & Anti-discrimination Policy"
          pic="/older/pic1.webp"
          href="/documentation/elder-respect-anti-discrimination-policy"
        />
        <PicTextFour
          linkText="Elder Community Standards"
          pic="/older/pic1.webp"
          href="/documentation/elder-community-standards"
        />
        <PicTextFour
          linkText="Carer standards"
          pic="/older/pic1.webp"
          href="/documentation/carer-standards"
        />
        <PicTextFour
          linkText="Quick guide – what you can expect"
          pic="/older/pic1.webp"
          href="/documentation/elder-standards"
        />
      </div>
    </>
  );
}

export default page;
