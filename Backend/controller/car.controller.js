import Car from "../model/car.model.js"; // Ensure the file path and extension are correct

export const getCar = async (req, res) => {
    try {
        // Fetch all car records from the database
        const cars = await Car.find();

        // Send a successful response with the list of cars
        res.status(200).json(cars);
    } catch (error) {
        console.error("Error fetching cars: ", error); // Use console.error for logging errors
        res.status(500).json({ message: "Internal Server Error" }); // Send a more descriptive error message
    }
};
