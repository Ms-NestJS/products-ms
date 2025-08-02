/* eslint-disable */

import 'dotenv/config';
import * as joi from 'joi';

/**
 * Interfaz que define las variables de entorno necesarias para la aplicación.
 *
 * @property PORT - Número de puerto donde se ejecutará el servidor.
 */
interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
}

/**
 * Esquema de validación de las variables de entorno utilizando Joi.
 *
 * - PORT: debe ser un número y es obligatorio.
 * - unknown(true): permite otras variables no especificadas en el esquema.
 */
const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
  })
  .unknown(true);

/**
 * Resultado de validar las variables de entorno con el esquema definido.
 *
 * @constant error - Objeto que contiene los detalles del error si la validación falla.
 * @constant value - Objeto con las variables validadas si la validación es exitosa.
 */
const { error, value }: joi.ValidationResult<EnvVars> = envsSchema.validate(
  process.env,
);

/**
 * En caso de error de validación, se lanza una excepción que detiene la ejecución.
 */
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

/**
 * Variables de entorno validadas y con tipo seguro.
 */
const envVars: EnvVars = value;

/**
 * Objeto exportado con las variables de entorno listas para usar en otros módulos.
 *
 * @example
 * import { envs } from './config/envs';
 * console.log(envs.port); // 3000
 */
export const envs = {
  port: envVars.PORT,
  database: envVars.DATABASE_URL,
};
