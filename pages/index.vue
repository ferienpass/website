<template>
  <div>

    <section-hero></section-hero>

    <link-anchor id="funktionen"></link-anchor>

    <section-intro></section-intro>

    <section-admin-features></section-admin-features>

    <section-customer-logos></section-customer-logos>

    <section-host-features></section-host-features>

    <section-cta class="mt-10 mb-10 md:mt-24 md:mb-24"></section-cta>

    <section-parent-features></section-parent-features>

    <link-anchor id="feedback"></link-anchor>

    <section-parent-stats></section-parent-stats>

    <section-parent-quotes></section-parent-quotes>

<!--    <section-customer-quote></section-customer-quote>-->

    <link-anchor id="preisgestaltung"></link-anchor>

    <section-pricing></section-pricing>

    <link-anchor id="blog"></link-anchor>

    <section-blog></section-blog>

    <section-about class="mt-24"></section-about>

    <section-cta class="mt-20 mb-12"></section-cta>

  </div>
</template>

<script>
  import SectionPricing from "../components/SectionPricing";
  import SectionCustomerLogos from "../components/SectionCustomerLogos";
  import SectionAbout from "../components/SectionAbout";
  import SectionBlog from "../components/SectionBlog";
  import SectionCustomerQuote from "../components/SectionCustomerQuote";
  import SectionParentQuotes from "../components/SectionParentQuotes";
  import SectionParentStats from "../components/SectionParentStats";
  import SectionCta from "../components/SectionCta";
  import SectionAdminFeatures from "../components/SectionAdminFeatures";
  import SectionHero from "../components/SectionHero";
  import SectionIntro from "../components/SectionIntro";
  import SectionHostFeatures from "../components/SectionHostFeatures";
  import SectionParentFeatures from "../components/SectionParentFeatures";
  import LinkAnchor from "../components/LinkAnchor";

  export default {
    components: {
      LinkAnchor,
      SectionParentFeatures,
      SectionHostFeatures,
      SectionIntro,
      SectionHero,
      SectionAdminFeatures,
      SectionCta,
      SectionParentStats,
      SectionParentQuotes,
      SectionCustomerQuote,
      SectionBlog,
      SectionAbout,
      SectionCustomerLogos,
      SectionPricing,
    },
    head () {
      return {
        meta: [
          { hid: 'description', name: 'description', content: 'Ferienpass-Software mit Online-Anmeldesystem für Gemeinden' }
        ]
      }
    }
  }
</script>
