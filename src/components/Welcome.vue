<template>
  <section id="welcome">
    <mdb-row>
      <mdb-col md="12">
        <mdb-card class="mb-4">
          <mdb-card-header>Welcome to the TiDAL WebSerial Editor</mdb-card-header>
          <mdb-card-body>
            Words about what this site is for<br>
            * TiDAL<br>
            * plug into USB,<br>

            <br>
            <span v-if="has_serial">
              <span v-if="! is_connected">Click Connect to connect to your badge via USB</span>
              <span v-else>Your badge is connected</span>
            </span>
            <span v-else>It appears your browser does not support WebSerial. Make sure to use Chrome (at least v89).</span>
            <br>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbCardHeader,
} from 'mdbvue';

import {device} from '../badgecomm';

let component = undefined;
setInterval(() => {
  component.is_connected = device !== undefined && device.opened;
}, 1000);

export default {
  name: 'Welcome',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
  },
  beforeMount() {
    component = this;
    this.has_serial = !!navigator.serial;
  },
  methods: {
  },
  data() {
    return {
      is_connected: device !== undefined && device.opened,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
