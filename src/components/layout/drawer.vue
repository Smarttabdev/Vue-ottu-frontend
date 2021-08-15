<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-layout  md-alignment-center-space-between header-nav" md-elevation="0">
        <div class="breadcrumb">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span>/Home/{{setting.breadcrumb}}</span>
        </div>

        <div class="flex">
          <md-field v-if="visibleSearch" class="md-small-hide">
            <label>Search</label>
            <md-input v-model="initial"></md-input>
          </md-field>

          <md-button v-else-if="!visibleSearch" class="md-icon-button md-small-hide mg0" @click="toggleSearch">
            <md-icon class="md-layout-item">search</md-icon>
          </md-button>
          <md-menu md-size="medium" md-align-trigger>
            <!-- <md-badge md-content="1"> -->
              <md-button  class="md-icon-button" md-menu-trigger>
                <md-icon class="md-layout-item">notifications_none</md-icon>
              </md-button>
            <!-- </md-badge> -->
            <md-menu-content>
              <md-menu-item>Profile</md-menu-item>
              <md-menu-item>Settings</md-menu-item>
              <md-menu-item>Sign out</md-menu-item>
            </md-menu-content>
          </md-menu>
          <md-menu md-size="medium" md-align-trigger>
            <md-button  class="md-icon-button" md-menu-trigger>
              <md-icon class="md-layout-item">settings</md-icon>
            </md-button>
            <md-menu-content>
              <md-menu-item>Profile</md-menu-item>
              <md-menu-item>Settings</md-menu-item>
              <md-menu-item>Sign out</md-menu-item>
            </md-menu-content>
          </md-menu>
          <md-menu md-size="medium" md-align-trigger>
            <md-button  md-menu-trigger>
              <div class="md-layout flex" >
                <img  class="avatar" src="https://vuematerial.io/assets/examples/avatar.png" alt="Avatar" >
                <p class="md-layout-item avatar-name">Mustafa A.</p>
                <md-icon class="md-layout-item">keyboard_arrow_down</md-icon>
              </div>
            </md-button>
            <md-menu-content>
              <md-menu-item>Profile</md-menu-item>
              <md-menu-item>Settings</md-menu-item>
              <md-menu-item>Sign out</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini" class="md-primary">
        <md-toolbar class="md-transparent" md-elevation="0">
          <!-- <span>Utto</span> -->
          <img src="../../assets/logo.png" alt="Utto" />
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>menu</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list class="list" > 
        <md-list-item v-if="menuVisible" class="md-list-label">
            <span class="md-list-item-text md-list-item-label" style="margin-left: 15px;">{{drawerItems.overview.label}}</span>
          </md-list-item>
          <md-list-item v-for="item in drawerItems.overview.links" :key="item.label" :class="(item.child ? 'md-expand' : 'no-expand') + (setting.breadcrumb.search(item.label) == 0 ? ' active' : '')" @click="!item.child && $setActiveSidebar({
            breadcrumb: item.label,
            selectedSidebar: item.label
          })" :md-expand="item.child ? true : false">
              <router-link v-if="!item.child" :to="item.path" class="flex link-area">
                <md-icon>{{item.icon}}</md-icon>
                <span class="md-list-item-text">{{item.label}}</span>
                <md-icon class="dropdown-icon" v-if="item.child">keyboard_arrow_down</md-icon>
              </router-link>
              <md-icon v-if="item.child">{{item.icon}}</md-icon>
              <span class="md-list-item-text" v-if="item.child">{{item.label}}</span>
              <md-icon class="dropdown-icon" v-if="item.child">keyboard_arrow_down</md-icon>
              <md-list slot="md-expand" v-if="item.child">
                <router-link :to="sub.path" class="flex link-area" v-for="sub in item.child" :key="sub.label">
                  <md-list-item class="md-inset" @click="$setActiveSidebar({
                  breadcrumb: item.label + '/' + sub.label,
                  selectedSidebar: sub.label
                })">{{sub.label}}</md-list-item>
                </router-link>
              </md-list>
          </md-list-item>

          <md-list-item v-if="menuVisible" class="md-list-label">
            <span class="md-list-item-text md-list-item-label" style="margin-left: 15px;">{{drawerItems.market.label}}</span>
          </md-list-item>

           <md-list-item v-for="item in drawerItems.market.links" :key="item.label" :class="(item.child ? 'md-expand' : 'no-expand') + (setting.breadcrumb.search(item.label) == 0 ? ' active' : '')" @click="!item.child && $setActiveSidebar({
            breadcrumb: item.label,
            selectedSidebar: item.label
          })" :md-expand="item.child ? true : false">
              <router-link v-if="!item.child" :to="item.path" class="flex link-area">
                <md-icon>{{item.icon}}</md-icon>
                <span class="md-list-item-text">{{item.label}}</span>
                <md-icon class="dropdown-icon" v-if="item.child">keyboard_arrow_down</md-icon>
              </router-link>
              <md-icon v-if="item.child">{{item.icon}}</md-icon>
              <span class="md-list-item-text" v-if="item.child">{{item.label}}</span>
              <md-icon class="dropdown-icon" v-if="item.child">keyboard_arrow_down</md-icon>
              <md-list slot="md-expand" v-if="item.child">
                <router-link :to="sub.path" class="flex link-area" v-for="sub in item.child" :key="sub.label">
                  <md-list-item class="md-inset" @click="$setActiveSidebar({
                  breadcrumb: item.label + '/' + sub.label,
                  selectedSidebar: sub.label
                })">{{sub.label}}</md-list-item>
                </router-link>
              </md-list>
          </md-list-item>
          <md-list-item v-if="menuVisible" class="md-list-label">
            <span class="md-list-item-text md-list-item-label" style="margin-left: 15px;">{{drawerItems.ottu_rent.label}}</span>
          </md-list-item>
  
           <md-list-item v-for="item in drawerItems.ottu_rent.links" :key="item.label" :class="(item.child ? 'md-expand' : 'no-expand') + (setting.breadcrumb.search(item.label) == 0 ? ' active' : '')" @click="!item.child && $setActiveSidebar({
            breadcrumb: item.label,
            selectedSidebar: item.label
          })" :md-expand="item.child ? true : false">
              <router-link v-if="!item.child" :to="item.path" class="flex link-area">
                <md-icon>{{item.icon}}</md-icon>
                <span class="md-list-item-text">{{item.label}}</span>
                <md-icon class="dropdown-icon" v-if="item.child">keyboard_arrow_down</md-icon>
              </router-link>
              <md-icon v-if="item.child">{{item.icon}}</md-icon>
              <span class="md-list-item-text" v-if="item.child">{{item.label}}</span>
              <md-icon class="dropdown-icon" v-if="item.child">keyboard_arrow_down</md-icon>
              <md-list slot="md-expand" v-if="item.child">
                <router-link :to="sub.path" class="flex link-area" v-for="sub in item.child" :key="sub.label">
                  <md-list-item class="md-inset" @click="$setActiveSidebar({
                  breadcrumb: item.label + '/' + sub.label,
                  selectedSidebar: sub.label
                })">{{sub.label}}</md-list-item>
                </router-link>
              </md-list>
          </md-list-item>

          <md-list-item v-if="menuVisible" class="md-list-label">
            <span class="md-list-item-text md-list-item-label" style="margin-left: 15px;">{{drawerItems.settings.label}}</span>
          </md-list-item>

         <md-list-item v-for="item in drawerItems.settings.links" :key="item.label" :class="(item.child ? 'md-expand' : 'no-expand') + (setting.breadcrumb.search(item.label) == 0 ? ' active' : '')" @click="!item.child && $setActiveSidebar({
            breadcrumb: item.label,
            selectedSidebar: item.label
          })" :md-expand="item.child ? true : false">
              <router-link v-if="!item.child" :to="item.path" class="flex link-area">
                <md-icon>{{item.icon}}</md-icon>
                <span class="md-list-item-text">{{item.label}}</span>
                <md-icon class="dropdown-icon" v-if="item.child">keyboard_arrow_down</md-icon>
              </router-link>
              <md-icon v-if="item.child">{{item.icon}}</md-icon>
              <span class="md-list-item-text" v-if="item.child">{{item.label}}</span>
              <md-icon class="dropdown-icon" v-if="item.child">keyboard_arrow_down</md-icon>
              <md-list slot="md-expand" v-if="item.child">
                <router-link :to="sub.path" class="flex link-area" v-for="sub in item.child" :key="sub.label">
                  <md-list-item class="md-inset" @click="$setActiveSidebar({
                  breadcrumb: item.label + '/' + sub.label,
                  selectedSidebar: sub.label
                })">{{sub.label}}</md-list-item>
                </router-link>
              </md-list>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content  class="page">
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';


  export default {
    name: 'Drawer',
    components:{
    },
    methods: {
      ...mapActions(['$setActiveSidebar']),
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      toggleSearch()  {
        this.visibleSearch = !this.visibleSearch;
      }
    },

    data: () => ({
      menuVisible: true,
      visibleSearch: false,
      initial:"",
      drawerItems: {
        overview: {
          label:"Overview",
          links: [
            {
              path:"/dashboard",
              label:"Dashboard",
              icon:"home",
              iconType: "normal",
            },
            {
              path:"/payment",
              label:"Payment",
              icon:"list_alt",
              iconType: "normal",
              child: [
                {
                  path: '/payment/create',
                  label: "Create",
                },
                {
                  path: '/payment/transactions',
                  label: "Transactions"
                },
                {
                  path: '/payment/deleted-transactions',
                  label: "Deleted Paid Transactions"
                }
              ]
            },
            {
              path:"/bulk",
              label:"Bulk",
              icon:"alarm",
              iconType: "normal",
              child: [
                {
                  path: '/bulk/upload',
                  label: "Uploads",
                },
                {
                  path: '/bulk/transactions',
                  label: "Transactions"
                },
                {
                  path: '/bulk/deleted-transactions',
                  label: "Deleted Paid Transactions"
                }
              ]
            },
            {
              path:"/customer_payment",
              label:"Customer Payment",
              icon:"attach_money",
              iconType: "normal",
              child: [
                {
                  path: '/customer_payment/transactions',
                  label: "Transactions"
                },
                {
                  path: '/customer_payment/deleted-transactions',
                  label: "Deleted Paid Transactions"
                }
              ]
            },
            
          ]
        },
         market: {
          label:"Market",
          links: [
            {
              path:"/catalogue",
              label:"Catalogue",
              icon:"store_mall_directory",
              iconType: "normal",
              child: [
                {
                  path: '/catalogue/transactions',
                  label: "Transactions"
                },
                {
                  path: '/catalogue/deleted-transactions',
                  label: "Deleted Paid Transactions"
                }
              ]
            },
            {
              path:"/ecommerce",
              label:"E-commerce",
              icon:"shopping_cart",
              iconType: "normal",
              child: [
                {
                  path: '/ecommerce/transactions',
                  label: "Transactions"
                },
                {
                  path: '/ecommerce/deleted-transactions',
                  label: "Deleted Paid Transactions"
                }
              ]
            },
            {
              path:"/shopify",
              label:"Shopify",
              icon:"style",
              iconType: "normal",
              child: [
                {
                  path: '/Shopify/transactions',
                  label: "Transactions"
                },
                {
                  path: '/Shopify/deleted-transactions',
                  label: "Deleted Paid Transactions"
                }
              ]
            },
          ]
        },
        ottu_rent: {
          label:"Ottu Rent",
          links: [
            {
              path:"/propertise",
              label:"Properties",
              icon:"assignment",
              iconType: "normal",
            },
            {
              path:"/leases",
              label:"Leases",
              icon:"home_work",
              iconType: "normal",
            },
            {
              path:"/invoices",
              label:"Invoices",
              icon:"reorder",
              iconType: "normal",
            },
            {
              path:"/payers",
              label:"Payers",
              icon:"supervisor_account",
              iconType: "normal",
            },
            //{
            //  path:"/inbox",
            //  label:"Inbox",
            //  icon:"speaker_notes",
            //  iconType: "normal",
            //},
            //{
            //  path:"/maintenance",
            //  label:"Maintenance",
            //  icon:"attach_money",
            //  iconType: "normal",
            //},
            //{
            //  path:"/transfers",
            //  label:"Transfers",
            //  icon:"verified_user",
            //  iconType: "normal",
            //},
            {
              path:"/reports",
              label:"Reports",
              icon:"chrome_reader_mode",
              iconType: "normal",
            },
          ]
        },
        settings: {
          label:"Settings",
          links: [
            {
              path:"/events",
              label:"Events",
              icon:"event",
              iconType: "normal",
              child: [
                {
                  path: '/events/transactions',
                  label: "Transactions"
                },
                {
                  path: '/events/deleted-transactions',
                  label: "Deleted Paid Transactions"
                },
                {
                  path: '/events/bookings',
                  label: "Bookings"
                },
                {
                  path: '/events/create',
                  label: "Create"
                },
                {
                  path: '/events/bulk-create',
                  label: "Bulk Create"
                },
                {
                  path: '/events/fullfilment',
                  label: "Fullfilment"
                }
              ]
            },
            {
              path:"/help",
              label:"Help",
              icon:"help",
              iconType: "normal",
            }
          ]
        }
      }
    }),
    computed: {
      ...mapState(['setting'])
    }
  }
</script>
