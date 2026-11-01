import { handleWebsiteMail } from "../../lib/website-mail";

export const onRequestPost = ({ request, env }: { request: Request; env: { RESEND_API_KEY?: string; RESEND_FROM_EMAIL?: string } }) => handleWebsiteMail(request, env, "newsletter");
