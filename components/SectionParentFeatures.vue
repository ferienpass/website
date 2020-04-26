<template>
  <div class="mt-10 mb-10 md:mt-24 md:mb-24 py-12 bg-white">
    <block-headline>
      Eltern-Portal

      <template #teaser>
        Mit <span class="text-blue-400">ferienpass</span><span class="text-tint">.</span><span
        class="text-blue-700">online</span> reduziert sich die Ferienplanung für die Eltern sich auf ein Minimum.
      </template>
    </block-headline>

    <block-features-three-column class="mt-16 md:mt-20">

      <feature-vertical title="Sortierung und Filterung" icon-class="bg-blue-500">
        Der Ferienpass kann einfach durchsucht werden. Eine Filterung nach Datum oder Altersbegrenzung erlaubt eine
        intuitive und schnelle Orientierung.

        <template #icon>
          <icon-search class="w-8 h-8"></icon-search>
        </template>
      </feature-vertical>

      <feature-vertical title="Ein Nutzeraccount" icon-class="bg-blue-500" class="mt-10 sm:mt-0">
        Eltern legen nur ein Nutzerprofil an, auch wenn sie mehrere Kinder zu Angeboten anmelden wollen. Dadurch
        jonglieren Eltern nicht mit zu vielen Zugangsdaten.

        <template #icon>
          <icon-user-group class="w-8 h-8"></icon-user-group>
        </template>
      </feature-vertical>

      <feature-vertical title="Zu- und Absagen verwalten" icon-class="bg-blue-500" class="mt-10 sm:mt-0">
        Die Eltern haben die Möglichkeit, Kinder zu Angeboten an- und auch wieder abzumelden.

        <template #icon>
          <icon-cursor-click class="w-8 h-8"></icon-cursor-click>
        </template>
      </feature-vertical>

      <feature-vertical title="Benachrichtigungen" icon-class="bg-blue-500" class="mt-10 sm:mt-0">
        Eltern erhalten eine E-Mail und/oder SMS, sobald sie eine Zusage für ein Angebot erreicht. Die
        Benachrichtigungen können von den Eltern individuell konfiguriert werden.

        <template #icon>
          <icon-mailbox-in class="w-8 h-8"></icon-mailbox-in>
        </template>
      </feature-vertical>

      <feature-vertical title="Gut organisiert" icon-class="bg-blue-500" class="mt-10 sm:mt-0">
        Zu jeder Ferienpass-Anmeldung erhalten Eltern eine Mail mit dem Kalendereintrag (iCal) als Anhang. So kann das
        Ferienpass-Angebot einfach in den Kalender eingetragen werden.

        <template #icon>
          <icon-calendar class="w-8 h-8"></icon-calendar>
        </template>
      </feature-vertical>

      <feature-vertical title="Datensparsamkeit" icon-class="bg-blue-500" class="mt-10 sm:mt-0">
        Bei der Registrierung der Eltern werden nur notwendige Daten abgefragt. Veranstalter erhalten die Kontaktdaten
        des Kindes, aber nie den vollen Namen oder das Geburtsdatum. Nach der Ferienzeit werden alle personenbezogenen
        Daten gelöscht.

        <template #icon>
          <icon-lock-closed class="w-8 h-8"></icon-lock-closed>
        </template>
      </feature-vertical>

    </block-features-three-column>

  </div>
</template>


<script>

  import BlockHeadline from "./BlockHeadline";
  import FeatureVertical from "./FeatureVertical";
  import IconHeart from "./IconHeart";
  import BlockFeaturesThreeColumn from "./BlockFeaturesThreeColumn";
  import IconSearch from "./IconSearch";
  import IconUserAdd from "./IconUserAdd";
  import IconUserGroup from "./IconUserGroup";
  import IconCursorClick from "./IconCursorClick";
  import IconMailboxIn from "./IconMailboxIn";
  import IconCalendar from "./IconCalendar";
  import IconLockClosed from "./IconLockClosed";

  export default {
    components: {
      IconLockClosed,
      IconCalendar,
      IconMailboxIn,
      IconCursorClick,
      IconUserGroup,
      IconUserAdd,
      IconSearch,
      BlockFeaturesThreeColumn,
      IconHeart,
      FeatureVertical,
      BlockHeadline
    }
  }
</script>

