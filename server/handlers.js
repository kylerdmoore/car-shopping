const pgp = require("pg-promise")();
const db = pgp("postgres://postgres@localhost:5432/postgres");

module.exports = {
    getCarsHandler: function (req, res) {
        db.many(
            `
            SELECT DISTINCT ON(cars.id) cars.id,
                cars.name,
                cars.year,
                models.name model,
                makes.name make,
                trims.name trim,
                colors.name color,
                ARRAY_AGG(options.name) options
            FROM public.cars
            JOIN public.models ON models.id = cars.model_id
            JOIN public.makes ON makes.id = models.make_id
            JOIN public.trims ON trims.id = cars.trim_id
            JOIN public.colors ON colors.id = cars.color_id
            LEFT JOIN public.car_option co ON co.car_id = cars.id
            LEFT JOIN public.options ON options.id = co.option_id
            GROUP BY 1, 2, 3, 4, 5, 6, 7
         `
        )
            .then((data) => {
                res.json(data);
            })
            .catch((error) => {
                res.json([]);
            });
    },

    createCarHandler: function (req, res) {
        db.one(
            `
            with inserted as (INSERT INTO public.cars (
                name,
                year,
                model_id,
                trim_id,
                color_id,
                created_at,
                updated_at
            ) VALUES (
                        $<name>,
                        $<year>,
                        $<model_id>,
                        $<trim_id>,
                        $<color_id>,
                        now(),
                        now()
            ) returning *)
            select inserted.id,
                inserted.name,
                inserted.year,
                makes.name as make,
                models.name as model,
                inserted.trim_id,
                inserted.color_id,
                inserted.created_at,
                inserted.updated_at
            from inserted
            join public.models on models.id = inserted.model_id
            join public.makes on makes.id = models.make_id
        `,
            req.body
        )
            .then((data) => {
                res.json(data);
            })
            .catch((error) => {
                res.status(400).json(error);
            });
    },

    getMakesHandler: function (req, res) {
        db.many(
            `
            SELECT id,
                   name
            FROM public.makes
            ORDER BY name ASC
         `
        )
            .then((data) => {
                res.json(data);
            })
            .catch((error) => {
                res.json([]);
            });
    },
};
