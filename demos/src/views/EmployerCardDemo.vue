<script setup>
import { ObEmployerCard } from "druware-components";

const employer = 		{
  "type": "E",
  "id": "SPECIALTYM",
  "name": "*.A2.B SYNCHRONIZED LOGISTICS, INC.,",
  "contactName": "EDDIE WILLIAMS",
  "address1": "fka SPECIALTY MFG.,",
  "address2": "209 DESOTA AVENUE",
  "city": "MORRISTOWN",
  "state": "TN  ",
  "country": "",
  "zip": "37813-    ",
  "phone": "(   )   -    ",
  "fax": "(   )   -    ",
  "email": "pd wkly",
  "bankNumber": null,
  "comment": "*emplymnt transf to on 4/28/09",
  "lastUpdate": null
};

</script>

<template>
  <div class="container">
    <p class="mb-3">
      Display an employer card.
    </p>

    <ObEmployerCard :employer="employer" />
    <ObEmployerCard :employer="employer" iconStyle="has-text-danger" />

    <section class="section">
      <h3 class="subtitle">
        Properties
      </h3>

      <h4>Employer</h4>

      <p>Sets the employer to be displayed in the card.</p>
    </section>

    <section class="section">
    <h3 class="subtitle">
      Wanted options:
    </h3>

    <ul>
      <li>Support a display style that supports the is-primary, is-info, is-success, is-warning, and is-danger classes.</li>
      <li>Support a mode where provided a sinle employar_id, it can self load.</li>
    </ul>
    </section>

  </div>
</template>

<style scoped>

</style>
