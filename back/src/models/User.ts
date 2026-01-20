import * as decorators from "@sequelize/core/decorators-legacy";
import * as sequelize from "@sequelize/core";

export class User extends sequelize.Model {
	@decorators.Attribute(sequelize.DataTypes.INTEGER)
	@decorators.PrimaryKey
	@decorators.AutoIncrement
	declare id: sequelize.CreationOptional<number>;

	@decorators.Attribute(sequelize.DataTypes.STRING)
	@decorators.NotNull
	declare username: string;

	@decorators.Attribute(sequelize.DataTypes.STRING)
	@decorators.NotNull
	@decorators.Unique
	declare email: string;

	@decorators.Attribute(sequelize.DataTypes.STRING)
	@decorators.NotNull
	declare password: string;

	@decorators.Attribute(sequelize.DataTypes.INTEGER)
	@decorators.NotNull
	@decorators.Default(0)
	declare resetId: sequelize.CreationOptional<number>;

	declare createdAt: sequelize.CreationOptional<Date>;
	declare updatedAt: sequelize.CreationOptional<Date>;
}