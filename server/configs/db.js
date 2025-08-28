import {neon} from '@neondatabase/serverless'
import axios from "axios";

const sql = neon(`${process.env.DATABASE_URL}`);

export default sql;