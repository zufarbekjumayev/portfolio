document.addEventListener("DOMContentLoaded", () => {
    
  
    // // LOADER
    // let loaderWrapper = document.querySelector("#loader")
  
    // setTimeout(() => {
    //   loaderWrapper.classList.add("hidden")
    // }, 1500)
  
    
  
    // Modal
    let modalOpenBtns = document.querySelectorAll("#button")
    let modalCloseBtn = document.querySelector("#modalClose")
    let modal = document.querySelector("#modal")
  
    let openModal = () => {
      modal.classList.remove("hidden")
      setTimeout(() => {
        modal.classList.remove("opacity-0")    
      }, 10)
      document.body.classList.add("overflow-hidden")
      clearTimeout(modalTimerId)
    }
  
    modalOpenBtns.forEach(qiymat => {
      qiymat.addEventListener("click", openModal)
    })
  
    let closeModal = () => {
      modal.classList.add("opacity-0")
      setTimeout(() => {
        modal.classList.add("hidden")
      }, 500)
      document.body.classList.remove("overflow-hidden")
    }
  
    modalCloseBtn.addEventListener("click", closeModal)
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal()
      }
    })
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal()
      }
    })
  
    let modalTimerId = setTimeout(openModal, 5000)
        //Form
        let form = document.querySelector("form")
        let telegramTokenBot = "8075883424:AAG_YIGTkefoBY60AHoCl5rNUUU3tF3cVx4"
        let chatId = "-1002601922331"
    
    
        let message = {
            loading: "Loading...",
            success: "Thanks for contacting with us",
            failure: "Something went wrong",
          }
        
    
        form.addEventListener("submit", (evt) => {
        evt.preventDefault()
        let statusMessage = document.createElement("div")
        let shuxa = document.querySelector("#shuxa")
      statusMessage.textContent = message.loading
      statusMessage.className =
        "mt-5 px-4 py-2 rounded-xl text-sm font-medium text-white bg-blue-500 animate-pulse"
      form.append(statusMessage)
    
    
        let formData = new FormData(form)
    
        let obj = {}
        formData.forEach((value, key) => {
            obj[key] = value
        })
        
        let openModal1 = () => {
          setTimeout(() => {
            shuxa.classList.remove("hidden")
          }, 100);
          setTimeout(() => {
            shuxa.classList.add("hidden")
          }, 2100);
        }
        axios.post(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
            chat_id: chatId,
            text: `📬 Yangi xabar:\n\n👤 Ism: ${obj.name}\n📞Telefon: ${obj.phone}`,
      })
      .then (() => {
        statusMessage.textContent = message.success
        statusMessage.classList = `mt-5 px-4 py-2 rounded-xl text-sm font-medium text-white bg-green-500`
        form.reset()
    })
    .catch(() => {
        statusMessage.textContent = message.failure
        statusMessage.classList = `mt-5 px-4 py-2 rounded-xl text-sm font-medium text-white bg-green-500`
        form.reset()
      })
      .finally(() => {
        setTimeout(() => {
            statusMessage.remove()
            closeModal()
            openModal1()
        }, 2500);
      })
    })
    
  
    
  })
  