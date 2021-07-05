<template>
  <div class="container">
    <div class="article">
      <span> השמ םייח ,םולש</span>
    </div>
    <div class="main">
      <div class="main__topic">
        <div class="main__topic_title">
          <div class="main__topic_icon-wrapper">
            <img src="@/assets/icons/user.svg" />
          </div>
          <span class="main__topic_text">ריחמה תעצהב היפצ - תכרעמל הסינכ</span>
        </div>
        <div class="main__topic_line"></div>
      </div>
      <span class="main__title"
        >שדח דוק תחילש לע ץחל דוק תלביק אל םא ,הסינכה דוק תא ןזה</span>
      <form @submit.prevent class="main__panel_form">
        <fieldset class="main__panel_form-group">
          <label>שמתשמ םש</label>
          <input type="search" class="main__panel_form-group_input" />
        </fieldset>
        <fieldset class="main__panel_form-group">
          <label>אמסיס</label>
          <input type="search" class="main__panel_form-group_input" />
        </fieldset>
        <div class="main__panel_form-control">
          <button class="main__panel_form-control_button cansel">ביטול</button>
          <button class="main__panel_form-control_button login">
            <span>כניסה</span>
            <img src="@/assets/icons/rightarrow.svg" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss" scoped>
$headertextcolor: #5f5f5f;
$articlebackground: #f5f5f5;
$loginbuttoncolor: #c4c4c4;
$canselbuttoncolor: #009c41;
$textwhite: #ffffff;

$standartfontsize: 24px;

.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .article {
    display: flex;
    min-height: 76px;
    align-items: center;
    background-color: $articlebackground;
    color: $headertextcolor;
    padding-right: 62px;
  }
  .main {
    background: linear-gradient(rgba(2, 27, 121, 0.6), rgba(2, 27, 121, 0.6)),
      url("~@/assets/backgrounds/loginbackground.png"), no-repeat;
    background-size: cover;
    display: flex;
    color: $textwhite;
    flex-direction: column;
    background-color: gray;
    align-items: center;
    flex-grow: 1;
    .main__topic {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      .main__topic_title {
        width: 100%;
        display: flex;
        align-items: center;
        margin-left: auto;
        .main__topic_text {
          word-wrap: break-word;
          align-self: flex-end;
          line-height: 56px;
          display: flex;
          font-size: 46px;
          margin-right: 30px;
        }
        .main__topic_icon-wrapper {
          display: flex;
        }
        @media screen and (max-width: 768px) {
          .main__topic_text {
            width: 220px;
            word-wrap: break-word;
            line-height: 28px;
            font-size: $standartfontsize;
            margin-right: 7px;
          }
          .main__topic_icon-wrapper {
            width: 39px;
            height: 39px;
          }
        }
      }
      .main__topic_line {
        min-width: 1000px;
        display: flex;
        min-height: 5px;
        background-color: $articlebackground;
        border-radius: 5px;
      }
      @media screen and (max-width: 768px) {
        .main__topic_line {
          min-width: 100%;
        }
      }
    }
  }
  .main__title {
    display: flex;
    text-align: center;
    justify-content: center;
    line-height: 26px;
    word-wrap: break-word;
    margin-top: 72px;
    font-size: $standartfontsize;
  }
  @media screen and (max-width: 768px) {
    .main__title {
      max-width: 400px;
      word-wrap: break-word;
    }
  }
  .main__panel_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 57px;
    .main__panel_form-group:nth-child(2) {
      margin-top: 62px;
    }
    .main__panel_form-group {
      border: none;
      display: flex;
      flex-direction: column;

      label {
        margin-left: auto;
        margin-bottom: 15px;
        margin-right: 43px;
        font-size: $standartfontsize;
      }
      .main__panel_form-group_input {
        display: flex;
        border-radius: 35px;
        padding: 20px 25px;
        font-size: 20px;
        border: none;
      }
      @media screen and (max-width: 768px) {
        .main__panel_form-group_input {
          align-items: stretch;
          padding: 13px 18px;
        }
      }
    }
    .main__panel_form-control {
      margin-top: 92px;
      display: flex;
      align-self: center;
      .main__panel_form-control_button {
        display: flex;
        justify-content: center;
        color: $textwhite;
        width: 350px;
        padding: 15px 130px;
        border: none;
        border-radius: 35px;
        font-size: 24px;
      }
      @media screen and (max-width: 768px) {
        .main__panel_form-control_button {
          padding: 10px 43px;
          width: 156px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .main__panel_form {
      align-items: stretch;
      align-self: stretch;
    }
  }
  @media screen and (max-width: 768px) {
    .main {
      background: linear-gradient(rgba(2, 27, 121, 0.6), rgba(2, 27, 121, 0.6)),
        url("~@/assets/backgrounds/mainbackground.png");
      background-size: cover;
    }
  }
}

.cansel {
  background-color: $canselbuttoncolor;
}
.login {
  img {
    margin-right: 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $loginbuttoncolor;
  margin-right: 40px;
}
@media screen and (max-width: 768px) {
  .navBar__info {
    font-size: 10px;
    .navBar__text-mobile {
      display: contents;
    }
  }
}
</style>
