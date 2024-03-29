const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h1", {}, props.animal),
        React.createElement("h1", {}, props.breed),
    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havanese"
        }),
        React.createElement(Pet, {
            name: "Ppper",
            animal: "Bird",
            breed: "Cockatiel"
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "Cat",
            breed: "Mix"
        }),
    ])
}