This is a Create-React-App application, meant as a conceptual demo.

The files of interest are the `src/tree-walker.ts`, and the `*-example` file(s) in each folder.
Work backwards to view implementation details.

Note that:

- there are no types (at the moment); it doesn't mean they can't be done
- all of the node-structures, the feature names, and generators are all in agreement per-example, but are all *completely different* from example to example (save for "type" and "children"); meanwhile, the core algorithm was ***unchanged***
- the call signature of each visitor, which generates view/code/etc should take an object, rather than shakily ordered arguments, but that, like types, is because I am too lazy to make that happen prior to a patch
