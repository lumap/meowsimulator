//// MONGODB
import { Collection, MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

const client = new MongoClient(env.MONGODB_URI);
await client.connect();

const db = client.db();
export const User = db.collection('users') as Collection<UserDoc>;
export const Session = db.collection('sessions') as Collection<SessionDoc>;

interface UserDoc {
	_id: string;
	username: string;
	password_hash?: string;
}

interface SessionDoc {
	_id: string;
	expires_at: Date;
	user_id: string;
}
