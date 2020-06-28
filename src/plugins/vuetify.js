import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            light: {
              primary: colors.purple.lighten1,
              secondary: colors.grey.darken1,
              accent: colors.shades.black,
              error: colors.red.accent3,
            },
            dark: {
              primary: colors.blue.lighten3,
            },
        },
    }
});
