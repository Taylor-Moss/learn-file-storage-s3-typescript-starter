import { respondWithJSON } from "./json";
import { getVideo } from "../db/videos";
import { BadRequestError } from "./errors";
import { type ApiConfig } from "../config";
import type { BunRequest } from "bun";
import { getBearerToken } from "../auth";
import { validateJWT } from "../auth";

export async function handlerUploadVideo(cfg: ApiConfig, req: BunRequest) {
  const { videoId } = req.params as { videoId?: string; };
  if (!videoId) {
    throw new BadRequestError("Invalid video ID");
  }

  const token = getBearerToken(req.headers);
  const userID = validateJWT(token, cfg.jwtSecret);
  const video = getVideo(cfg.db, videoId);
  const MAX_UPLOAD_SIZE = 10 << 20;


















  return respondWithJSON(200, null);
}