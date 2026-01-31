import TopHero from "@/components/home/TopHero";
import PictextControl from "@/components/pictext";
import PicTextFour from "@/components/PicTextFour";
import React from "react";

function SafeguardingPage() {
  return (
    <>
      <TopHero
        title="Safeguarding at Elder"
        text="At the heart of Elder are our Safety and Trust Principles. We
            believe every adult has the right to live safely, free from abuse
            and neglect."
        img="/older/pic18.webp"
        buttonText=""
        hasReview={false}
        hasGroupText={true}
      />

      <div>
        <p className="p-4">
          At the heart of Elder are our Safety and Trust Principles. Elder
          operates as an Introductory Agency as defined by the Care Quality
          Commission (CQC), meaning we match carers with service users but do
          not directly employ them on our platform. Elder provides a great
          resource for families to find support from a vetted, professional
          self-employed carer for their loved ones.
        </p>
        <p className="p-4">
          At Elder HQ we believe every adult has the right to live safely, free
          from abuse and neglect. That’s why at Elder, we have a Designated
          Safeguarding Lead, to ensure this core principle, safety, is upheld.
        </p>
        <p className="p-4">
          Safeguarding and adult support and protection refers to the proactive
          measures taken to protect adults at risk from harm, abuse, or neglect
          and promote their well-being. It encompasses physical, emotional,
          sexual, and financial abuse, as well as neglect, discrimination, and
          any other forms of maltreatment.
        </p>
        <p className="p-4">
          An ‘adult at risk’ is an adult who has care and support needs and
          therefore has limited ability or is unable to protect themselves. At
          Elder we use the term ‘Care Recipient’ to refer to adults with care
          and support needs who are facilitating their care through the Elder
          platform.
        </p>
        <p>Below are the categories of abuse: </p>
        Physical: hitting, slapping, kicking etc. but also any act that may
        cause physical symptoms, e.g. misuse of medication, inappropriate
        restraint, poor moving and handling techniques etc. Financial or
        material: theft, fraud, internet scamming, mismanagement of a person’s
        financial affairs. Sexual: does not have to involve sexual contact –
        includes displaying pornographic images, forcing a person to witness
        sexual acts/videos etc. Any sexual act to which an individual has not
        consented. Discriminatory: racism, sexism, ageism, homophobia – may
        include hate crimes. Organisational: poor care practice e.g.
        consistently low staffing levels, rigid routines for the benefit of the
        organisation rather than the individuals. Neglect and acts of omission:
        not providing or allowing access to appropriate health, education or
        social care or treatment. Neglect may be intentional or unintentional.
        Psychological: includes threat, harassment, intimidation, cyber
        bullying. Domestic Violence or Abuse: is defined as an incident or
        pattern of incidents of controlling, coercive or threatening behaviour,
        violence or abuse between those aged 16 or over who are, or have been
        intimate partners or are family members. Self-Neglect: covers a wide
        range of behaviour, neglecting to care for one’s own needs, health or
        surroundings, and includes hoarding. Modern Slavery: encompasses forced
        labour, human trafficking, domestic servitude, forcing individuals into
        criminal activity. We recognise that safeguarding concerns can arise
        from time to time. It is important to us that families and carers know
        what to do when they have concerns. If you believe a Care Recipient is
        in imminent danger, please contact emergency services by dialling 999.
      </div>
      <div>
        Social services If you have a safeguarding concern, we recommend
        reporting it to the relevant local authority. To identify the
        appropriate local authority, please visit Find Your Local Council and
        enter the Care Recipient’s postcode.
      </div>
      <div>
        The police If you believe a criminal offence has occurred such as theft,
        assault, or gross neglect it is crucial you escalate your concerns
        promptly to the police. Where the adult is at significant or imminent
        risk of harm, contact the police via 999. If you are escalating in
        retrospect, please contact the police via 101.
      </div>
      <div>
        Reporting Concerns to Elder HQ If you suspect or become aware of abuse,
        neglect or harm, please contact Elder immediately via email. Emails are
        monitored Monday to Friday within business hours. If you are a
        self-employed carer on our platform and your concern pertains to your
        current placement, you can also raise your concerns via the CareLogs
        section of the Elder Hub. All concerns are reviewed by our Designated
        Safeguarding Lead, who will work with you and cooperate with any third
        parties as required. We take the safety and quality of our platform very
        seriously and aim to address serious concerns within 3 business hours.
        Where concerns are relating to the conduct of a self-employed carer on
        our platform we will follow our usual safeguarding and quality assurance
        procedures. The safety and integrity of our platform is underpinned by
        stringent access criteria. Our Integrated Governance Committee meets
        once per week to review safeguarding concerns actioned by our Designated
        Safeguarding Lead. Our Integrated Governance Committee Consists of: CEO,
        CFO Director of Legal and Data Protection Officer Head of Service Head
        of Clinical Senior Clinical Lead Nurse Designated Safeguarding Lead
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center gap-6 px-4">
        <PicTextFour
          linkText="What self-employed carers can expect from Elder"
          pic="/older/pic1.webp"
          href="/documentation/what-self-employed-carers-can-expect-from-elder"
        />
        <PicTextFour
          linkText="What self-employed carers can expect from Elder"
          pic="/older/pic1.webp"
          href="/what-a-self-employed-carer-can-expect-from-an-elder-placement"
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

export default SafeguardingPage;
