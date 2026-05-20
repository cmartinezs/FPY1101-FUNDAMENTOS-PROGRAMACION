# Repository Guidelines

## Project Structure & Module Organization

This repository is a documentation-first Python course for students moving from PSeInt to Python. The main course material lives in `docs/lessons/`, with one directory per lesson using numeric prefixes such as `01-homologacion-pseint-python/`. Each lesson should contain:

- `README.md`: lesson overview and navigation.
- `teoria.md`: progressive explanation with examples.
- `aplicacion.md`: solved exercises and guided examples.
- `practica.md`: student exercises.

Supplemental material belongs in `docs/extras/`, grouped by topic such as `terminal/`, `git-github/`, `markdown/`, and `matematicas-para-programar/`. Runnable Python exercise files are currently under `docs/ejercicios/`.

## Build, Test, and Development Commands

There is no build system or package manifest in this repository. Use lightweight local checks:

- `python3 docs/ejercicios/01-homologacion/02-numero-doble.py`: run a specific exercise script.
- `rg "texto" docs/`: search course material quickly before adding duplicate content.
- `git diff --check`: detect trailing whitespace and formatting issues before committing.
- `git status --short`: confirm the files changed in your contribution.

If you add tooling later, document the exact command here and keep it runnable from the repository root.

## Coding Style & Naming Conventions

Write Markdown in clear Spanish, matching the existing instructional tone: direct, gradual, and student-focused. Keep headings descriptive and use fenced code blocks with language tags, for example ` ```python `. Preserve ASCII-only text unless a file already uses accented characters consistently.

For Python examples, prefer simple, beginner-readable code over compact idioms. Use 4-space indentation, `snake_case` variables, and names that describe the classroom concept, such as `edad_usuario` or `total_compra`.

## Testing Guidelines

No automated test suite is configured. Validate Python exercises by running each changed `.py` file manually with representative inputs. For Markdown-only changes, review rendered headings, links, lists, and code fences. Check internal links whenever files are renamed or lesson directories are added.

## Commit & Pull Request Guidelines

Recent history uses short imperative commit subjects such as `Add lesson 06 on functions and optional typing with exercises and theory` and `Refactor course documentation structure and content`. Follow that style: start with a verb, describe the content area, and keep the subject concise.

Pull requests should summarize the educational change, list added or modified lesson paths, and note any manually tested Python scripts. Include screenshots only when rendered documentation or diagrams are materially changed.

