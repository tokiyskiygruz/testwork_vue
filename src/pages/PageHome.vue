<template>
  <div class="container">
    <div class="main-content">
      <div class="search-panel">
        <div class="search-panel_contol">
          <div class="search-panel_control_icon">
            <img src="@/assets/icons/user.svg" />
          </div>
          <div class="search-panel_control_button-wrapper">
            <div class="button right">וקפוהש תוסילופ</div>
            <div class="button left">תונורחא תועצה</div>
          </div>
        </div>
        <div class="line"></div>
        <div class="search-panel__research">
          <div class="search-panel__research_field">
            <input
              type="text"
              placeholder="שופיח"
              class="search-panel_research_input"
            />
            <img src="@/assets/icons/loupe.svg" />
          </div>
          <button class="search-panel__research_button" v-bind:class="{}">
            <span>השדח העצה</span>
            <img src="@/assets/icons/rightarrow.svg" />
          </button>
          <button class="search-panel__research_button-mobile">
            <img src="@/assets/icons/Union.svg" alt="" />
          </button>
        </div>
        <div class="line-mobile"></div>
      </div>
      <div class="table">
        <div class="table__row head">
          <div>ףנע</div>
          <div>רצומ</div>
          <div>חטובמ םש</div>
          <div>יושיר ‘סמ</div>
          <div>תוהז תדועת</div>
          <div>העצהה תחיתפ</div>
          <div>חוטיבה תליחת</div>
          <div>הסילופ ‘סמ</div>
          <div>חוקלל חלשנ</div>
        </div>
        <div
          v-for="(item, index) in tableItems"
          :key="index"
          class="table__row"
        >
          <div class="table__row-content">
            <div
              class="table__row-icons-wrapper"
              :class="{ 'table__row-icons-wrapper-active': item.isActive }"
            >
              <div class="table__row-icons">
                <button class="table__row-icons_envelope">
                  <img src="@/assets/icons/envelopeblue.svg" alt="" />
                </button>
                <button class="table__row-icons_pencil">
                  <img src="@/assets/icons/pencilblue.svg" alt="" />
                </button>
              </div>
            </div>
            <div
              class="table__row-content-data "
              :class="{ active: item.isActive}"
              @click="changeColor(item)"
            >
              <div>{{ item.first }}</div>
              <div>{{ item.second }}</div>
              <div>{{ item.third }}</div>
              <div>{{ item.fourth }}</div>
              <div>{{ item.fifth }}</div>
              <div>{{ item.sixth }}</div>
              <div>{{ item.seventh }}</div>
              <div>{{ item.eighth }}</div>
              <div>
                <img
                  src="@/assets/icons/check.svg"
                  v-bind:class="{ 'check-icon_active': item.icon }"
                  class="check-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-mobile">
        <div
          class="table-mobile_row"
          v-for="(item, index) in tableItems"
          :key="index"
        >
          <div class="icons">
            <div class="icon-wrapper_car">
              <img src="@/assets/icons/car.svg" alt="" />
            </div>
            <div class="contol_buttons">
              <div class="icon-wrapper_pencil">
                <img src="@/assets/icons/Pencil.svg" alt="" />
              </div>
              <div class="icon-wrapper_envelope">
                <img src="@/assets/icons/envelope.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="mobile-line"></div>
          <div class="info-panel">
            <div class="place-info">
              <div>
                <span class="note">ביטקלוק</span>
                <span class="simple">{{ item.second }}</span>
              </div>
              <div>
                <span class="note">חטובמ םש</span>
                <span class="simple">{{ item.third }}</span>
              </div>
            </div>
            <div class="contact-info">
              <div class="contact-info_numbers">
                <div>
                  <span class="note">תוהז תדועת</span>
                  <span class="simple">{{ item.fifth }}</span>
                </div>
                <div class="left-side">
                  <span class="note">יושיר רפסמ</span>
                  <span class="simple">{{ item.fourth }}</span>
                </div>
              </div>
              <div class="contact-info_data">
                <div>
                  <span class="note">העצה תחיתפ</span>
                  <span class="simple">{{ item.sixth }}</span>
                </div>
                <div class="left-side">
                  <span class="note">חוטיב תליחת</span>
                  <span class="simple">{{ item.seventh }}</span>
                </div>
              </div>
            </div>
            <div class="contact-info_status">
              <span class="simple">{{ item.eighth }}</span>
              <span
                class="required_field"
                v-bind:class="{ 'required-active': item.icon }"
                >(חוקלל החלשנ)</span
              >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tableItemsjson from "@/data/data.json";
export default {
  name: "Home",
  data() {
    return {
      tableItems: tableItemsjson,
    };
  },
  methods: {
    changeColor(item) {
      item.isActive = !item.isActive;
    }
  },
};
</script>

<style lang="scss" scoped>
$headertextcolor: #5f5f5f;
$articlebackground: #f5f5f5;
$loginbuttoncolor: #c4c4c4;
$greenbuttoncolor: #009c41;
$textwhite: #ffffff;
$standartfontsize: 24px;
.container {
  display: flex;
  background: linear-gradient(rgba(2, 27, 121, 0.6), rgba(2, 27, 121, 0.6)),
    url("~@/assets/backgrounds/mainbackground.png"), no-repeat;
  background-size: cover;
  justify-content: center;
  flex: 1;
  .main-content {
    display: flex;
    flex-direction: column;
    .search-panel {
      display: flex;
      flex-direction: column;
      .search-panel_contol {
        display: flex;
        margin-top: 35px;
        .search-panel_control_button-wrapper {
          position: relative;
          align-items: center;
          display: flex;
          flex-grow: 1;
          margin-right: 25px;
          border-radius: 35px;
          .button {
            display: flex;
            padding: 12px;
            font-size: 30px;
            border-radius: 35px;
          }
            .right {
              position: absolute;
              justify-content: center;
              width: 50%;
              z-index: 100;
              background-color: #ff7728;
              color: $textwhite;
            }
            .left {
              position: absolute;
              background-color: $textwhite;
              justify-content: center;
              width: 50%;
              left: 0;
              color: #5f5f5f;
            }
        }
        @media screen and (max-width: 768px) {
          .search-panel_control_icon {
            display: none;
          }
          .search-panel_control_button-wrapper {
            margin: auto;
            margin-bottom: 25px;
            .button {
              font-size: 18px;
              padding: 10px;
            }
          }
        }
      }

      .line {
        margin-top: 15px;
        margin-bottom: 40px;
        width: 100%;
        height: 5px;
        background-color: $textwhite;
        border-radius: 3px;
      }
      .line-mobile {
        display: none;
        margin-top: 15px;
        margin-bottom: 40px;
        width: 100%;
        height: 5px;
        background-color: $textwhite;
        border-radius: 3px;
      }
      @media screen and (max-width: 768px) {
        .line {
          display: none;
        }
        .line-mobile {
          display: block;
        }
      }
      .search-panel__research {
        display: flex;
        width: 100%;

        .search-panel__research_field {
          display: flex;
          border-radius: 35px;
          padding: 20px 25px;
          font-size: 20px;
          background-color: $textwhite;
          width: 70%;
          .search-panel_research_input {
            display: flex;
            width: 100%;
            border: none;
            background: none;
          }
        }
        .search-panel__research_button {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: $standartfontsize;
          background-color: $greenbuttoncolor;
          border: none;
          width: 30%;
          margin-right: 30px;
          border-radius: 35px;
          padding: 20px 25px;
          color: $textwhite;
          img {
            margin-right: 15px;
          }
        }
        .search-panel__research_button-mobile {
          display: none;
          background-color: $greenbuttoncolor;
          border-radius: 35px;
          padding: 10px;
          border: none;
          margin-right: 25px;
        }
      }
      @media screen and (max-width: 768px) {
        .search-panel__research {
          margin-top: 25px;
          .search-panel__research_field {
            padding: 10px 15px;
            font-size: 18px;
            width: 90%;
          }
          .search-panel__research_button {
            display: none;
          }
          .search-panel__research_button-mobile {
            display: flex;
          }
        }
      }
    }
    .table {
      margin-top: 35px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .head {
        display: flex;
        padding: 5px;
        div {
            display: flex;
            justify-content: center;
            min-width: 120px;
            padding: 8px;
        }

        color: $textwhite;
      }
      .table__row {
        display: flex;
        .table__row-content {
          display: flex;
          .table__row-icons-wrapper {
            display: none;
            position: relative;
            .table__row-icons {
              display: flex;
              left: 15px;
              position: absolute;
              button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 45px;
                height: 45px;
                border: none;
                border-radius: 25px;
                background-color: $textwhite;
              }
              .table__row-icons_pencil {
                margin-right: 15px;
              }
            }
          }
          .table__row-icons-wrapper-active {
            display: block;
          }

          .table__row-content-data {
            display: flex;
            border-radius: 35px;
            background-color: $textwhite;
            padding: 5px;
            div {
              display: flex;
              justify-content: center;
              min-width: 120px;
              padding: 8px;
            }
          }
          .active {
            background-color: orange;
          }
          .table__row-icons {
            display: flex;
          }
        }
        .table__row-content-data:not(:first-child) div:not(:first-child) {
          border-right: 2px solid lightgray;
        }
      }
      .table__row:not(:first-child) .table__row-content {
        margin-top: 15px;
      }
    }
    .table-mobile:not(:first-child) .table-mobile_row {
      margin-bottom: 25px;
    }
    .table-mobile {
      display: none;
      flex-direction: column;
      flex-grow: 1;
      .table-mobile_row {
        background-color: $textwhite;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        padding: 15px 10px;
        .icons {
          display: flex;
          justify-content: flex-end;
          .contol_buttons {
            display: flex;
            align-items: flex-end;
            .icon-wrapper_pencil {
              display: flex;
              padding: 11px;
              background-color: $greenbuttoncolor;
              border-radius: 35px;
              align-items: center;
            }
            .icon-wrapper_envelope {
              display: flex;
              padding: 12px 3px 12px 7px;
              background-color: $greenbuttoncolor;
              border-radius: 35px;
              margin-right: 15px;
            }
          }
          .icon-wrapper_car {
            display: flex;
            margin-left: auto;
            align-items: flex-end;
          }
        }
        .mobile-line {
          border-radius: 2px;
          height: 5px;
          margin: 13px 0px;
          background-color: #1d4076;
        }
        .info-panel {
          .note {
            color: #797979;
            font-size: 18px;
            line-height: 21px;
          }
          .simple {
            font-weight: bold;
            margin-top: 2px;
            color: #21325e;
            font-size: 20px;
            line-height: 23px;
          }
          display: flex;
          padding: 15px;
          flex-direction: column;
          .place-info {
            div {
              display: flex;
              flex-direction: column;
              margin-bottom: 15px;
            }
          }
          .contact-info {
            display: flex;
            flex-direction: column;
            .left-side {
              padding-left: 10px;
            }
            .contact-info_numbers {
              margin-bottom: 15px;
              display: flex;
              justify-content: space-between;
              div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              }
            }
            .contact-info_data {
              display: flex;
              justify-content: space-between;
              div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              }
            }
          }
          .contact-info_status {
            display: flex;
            margin-top: 15px;
            justify-content: space-between;
            .required_field {
              margin-right: auto;
              font-weight: bold;
              font-size: 20px;
              color: #797979;
            }
            .required-active {
              color: $greenbuttoncolor;
            }
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      .table {
        display: none;
      }
      .table-mobile {
        display: flex;
      }
    }
  }
}



.check-icon {
  display: none; // Убирать none при нажатии на кнопку!!!!!!
}
.check-icon_active {
  display: block;
}
</style>
