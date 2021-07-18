const subscriptionForm = document.getElementById("subscription-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const subscribedMessage = document.getElementById("subscribed-message");

function addSubscription(e){
    e.preventDefault();

    console.log("add subscription");

    const newSubscriber = {
        name: nameInput.value,
        email: emailInput.value
    }
    console.log(newSubscriber)

    let subscribersList = [];

    const localSubscribersList = localStorage.getItem("subscribersList");
    console.log(localSubscribersList);

    if (localSubscribersList !== null){
        subscribersList = JSON.parse(localSubscribersList);
    }

    subscribersList.push(newSubscriber);
    localStorage.setItem("subscribersList", JSON.stringify(subscribersList))

    nameInput.value = "";
    emailInput.value = "";
    subscribedMessage.classList.remove("hidden");
}

subscriptionForm.addEventListener("submit", addSubscription);