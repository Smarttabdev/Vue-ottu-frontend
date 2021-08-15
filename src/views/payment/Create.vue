<template>
  <div class="md-payment">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-95 md-payment-info">
        You can use this page to send payment request to <br />
        your customers using the information here.
      </div>
      <div class="md-layout-item md-size-95 md-payment-content">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-50">
            <md-field>
              <md-input  placeholder="Email" class="md-custom-input bold"></md-input>
            </md-field>
            <md-field class="suffix">
              <md-input  placeholder="Amount" class="md-custom-input"></md-input>
              <md-menu class="md-suffix" md-size="small" md-align-trigger>
                <md-button md-menu-trigger>KWD <md-icon>arrow_drop_down</md-icon></md-button>
                <md-menu-content class="custom-dropdown">
                  <md-menu-item>KWD <md-icon class="icon-check">check_circle</md-icon></md-menu-item>
                  <md-menu-item>OMR</md-menu-item>
                </md-menu-content>
              </md-menu>
            </md-field>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-40">
                <md-field class="suffix">
                  <md-input  placeholder="Customer ID" class="md-custom-input"></md-input>
                  <md-icon class="md-suffix md-suffix-icon">help_outline</md-icon>
                </md-field>
              </div>
              <div class="md-layout-item md-size-60">
                <md-field>
                  <md-input  placeholder="Full name" class="md-custom-input"></md-input>
                </md-field>
              </div>
            </div>

            <md-field class="prefix">
              <div class="phone-suffix">
                <md-menu md-size="small" md-align-trigger>
                  <md-button md-menu-trigger><img src="@/assets/flag/flag1.png" width="25" /> +965 <md-icon>arrow_drop_down</md-icon></md-button>
                  <md-menu-content>
                    <md-menu-item><img src="@/assets/flag/flag1.png" width="30" /> +965</md-menu-item>
                    <md-menu-item><img src="@/assets/flag/flag1.png" width="30" /> +965</md-menu-item>
                  </md-menu-content>
                </md-menu>
              </div>
              <md-input class="md-custom-input"  placeholder="Phone Number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50">
            <div class="md-layout md-gutter radio">
              <div class="md-layout-item md-size-35">
                <md-radio v-model="radio" value="a" class="md-primary">Use Defaul Email</md-radio>
              </div>
              <div class="md-layout-item md-size-35">
                <md-radio v-model="radio" value="b" class="md-primary">SMS Notification</md-radio>
              </div>
              <div class="md-layout-item md-size-30">
                <md-radio v-model="radio" value="c" class="md-primary">QR Code</md-radio>
              </div>
            </div>
            <md-field class="select">
              <md-select placeholder="language" name="country" id="country" md-dense class="md-custom-input">
                <md-option value="australia">Australia</md-option>
                <md-option value="brazil">Brazil</md-option>
                <md-option value="japan">Japan</md-option>
                <md-option value="united-states">United States</md-option>
              </md-select>
            </md-field> 
            <md-field class="suffix m5">
              <md-input  placeholder="Booking Reference" class="md-custom-input"></md-input>
              <div class="md-suffix p3"><md-icon class="help-icon">help_outline</md-icon></div>
            </md-field>
            <md-button class=" m5 md-custom-color ml0" title="try to add something here it will help"><md-icon class="attach">attachment</md-icon> ADD Attachment</md-button>
          </div>
        </div>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-35"></div>
          <div class="md-layout-item md-size-65">
            <div class="md-layout radio md-gutter">
              <div class="md-layout-item md-size-25">
                <md-radio v-model="radio" value="a" class="md-primary">Mastercard</md-radio>
              </div>
              <div class="md-layout-item md-size-25">
                <md-radio v-model="radio" value="b" class="md-primary">K-Net</md-radio>
              </div>
              <div class="md-layout-item md-size-25">
                <md-radio v-model="radio" value="c" class="md-primary">Kpayt</md-radio>
              </div>
              <div class="md-layout-item md-size-25">
                <md-radio v-model="radio" value="d" class="md-primary">Omannet</md-radio>
              </div>
            </div>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field class="default">
              <md-textarea placeholder="Remarks" class="md-custom-input"></md-textarea>
            </md-field>
          </div>
        </div>
        <h4 class="md-custom-title">Payment date</h4>
      </div>
      <div class="md-layout-item md-size-95 md-payment-bottom">
        <div class="md-layout md-gutter d-flex">
          <div class="md-layout-item md-size-15">
            <h4>When to Send</h4>
          </div>
          <div class="md-layout-item md-size-15">
            <md-radio v-model="radio" value="a" class="md-primary">Send now</md-radio>
          </div>
          <div class="md-layout-item md-size-30">
            <md-radio v-model="radio" value="b" class="md-primary">Schedule</md-radio>
          </div>
          <div class="md-layout-item md-size-25">
            <md-field>
              <md-input placeholder="Schedule" class="md-custom-input"></md-input>
              <div class="custom-suffix">
                <md-icon>event</md-icon>
              </div>
            </md-field>
          </div>
          <div class="md-layout-item md-size-15"></div>
          <div class="md-layout-item md-size-15">
            <h4>Due date</h4>
          </div>
          <div class="md-layout-item md-size-15">
            <md-radio v-model="radio" value="a" class="md-primary">3 days</md-radio>
          </div>
          <div class="md-layout-item md-size-15">
            <md-radio v-model="radio" value="b" class="md-primary">7 days</md-radio>
          </div>
          <div class="md-layout-item md-size-15">
            <md-radio v-model="radio" value="c" class="md-primary">Custom</md-radio>
          </div>
          <div class="md-layout-item md-size-25">
            <md-field>
              <md-input placeholder="Schedule" class="md-custom-input"></md-input>
              <div class="custom-suffix">
                <md-icon>event</md-icon>
              </div>
            </md-field>
          </div>
          <div class="md-layout-item md-size-15"></div>
          <div class="md-layout-item md-size-60">
            <md-field class="select">
              <md-select placeholder="Default Follow-up Sequence" v-model="sequence" name="country" id="country" md-dense class="md-custom-input">
                <md-option value="australia">Australia</md-option>
                <md-option value="brazil">Brazil</md-option>
                <md-option value="japan">Japan</md-option>
                <md-option value="united-states">United States</md-option>
              </md-select>
            </md-field> 
          </div>
          <div class="md-layout-item md-size-40"></div>
          <div class="md-layout-item md-size-20">
            <md-button class="btn-orange m5 ">Submit</md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'payment',
  data() {
    return {
      radio: "",
      sequence: ""
    }
  },
  components: {
  }
}
</script>
