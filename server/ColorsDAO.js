const DAO = require("./Dao");

class ColorsDAO extends DAO {
    /**
     * Get car colors form db.
     * @returns {Promise<any>}
     */
    selectColors() {
        return this.db.many(
            `
            SELECT id,
                   name
            FROM public.colors
            ORDER BY name ASC
         `
        );
    }
}

module.exports = ColorsDAO;
