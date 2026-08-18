import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const BOOKS = resolve(process.cwd(), "src/content/books/books.json");

const readBody = (req) =>
  new Promise((done, fail) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
    });
    req.on("end", () => done(raw));
    req.on("error", fail);
  });

/**
 * Dev-only endpoints backing the /reading/review tool, so annotating a book
 * writes straight to books.json instead of round-tripping through a download.
 * Never runs in a production build.
 */
export default function booksPlugin() {
  return {
    name: "books-review-api",
    apply: "serve",

    // books.json is imported by the public Reading page, so saving would
    // normally trigger a full reload and wipe whatever is half-typed in the
    // review form. Suppress it; the review page fetches its own fresh copy.
    handleHotUpdate({ file }) {
      if (file === BOOKS) return [];
    },

    configureServer(server) {
      server.middlewares.use("/__books", async (req, res) => {
        res.setHeader("Content-Type", "application/json");

        if (req.method === "GET") {
          res.end(readFileSync(BOOKS, "utf8"));
          return;
        }

        if (req.method === "POST") {
          try {
            const books = JSON.parse(await readBody(req));
            if (!Array.isArray(books) || books.length === 0) {
              throw new Error("expected a non-empty array of books");
            }
            writeFileSync(BOOKS, JSON.stringify(books, null, 2) + "\n");
            res.end(JSON.stringify({ ok: true, count: books.length }));
          } catch (err) {
            res.statusCode = 400;
            res.end(JSON.stringify({ ok: false, error: err.message }));
          }
          return;
        }

        res.statusCode = 405;
        res.end(JSON.stringify({ ok: false, error: "method not allowed" }));
      });
    },
  };
}
