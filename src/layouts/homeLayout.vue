<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Advent Hymnals Editor </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      ref="drawer"
      v-model="leftDrawerOpen"
      @mouseout="mouseOutofDrawer"
      overlay
      bordered
      :breakpoint="500"
      persist
      content-class="bg-primary text-white"
    >
      <q-list>
        <q-item tag="a" href="#/cis">
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>CiS</q-item-label>
            <q-item-label caption class="text-white"> Christ in Song </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- <router-view /> -->
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      leftDrawerOpen: true,
      openOriginal: false,
    };
  },
  methods: {
    mouseOutofDrawer(pos) {
      if (Math.abs(pos.clientX - this.$refs.drawer.width) < 5) {
        this.leftDrawerOpen = false;
      }
    },
    originalFilesList() {
      let ret = {};
      for (let i = 0; i <= 637; i++) {
        ret[i] = `page`;
      }
    },
  },
};
</script>
