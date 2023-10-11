import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

/**
 * Zod Schema로 Body, Query, Params를 검증하는 미들웨어
 */
export const zodValidator = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parseResult = await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    req = Object.assign(req, {
      body: parseResult.body ?? req.body,
      query: parseResult.query ?? req.query,
      params: parseResult.params ?? req.params,
    });

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
