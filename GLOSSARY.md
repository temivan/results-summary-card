# Glossary

- **Result**: the full set of test outcomes shown on the card, one entry per Category. It comes from `src/data.json`.
- **Category**: one of the tests taken (Reaction, Memory, Verbal, Visual). Each has a name, an icon and a Score.
- **Score**: a Category's result, a whole number out of 100.
- **Total score**: the mean of all Category Scores, rounded to the nearest whole number (76 for the current data). It is derived, not stored.
- **Grade**: the word shown under the Total score, derived from it: 90+ "Excellent", 75+ "Great", 50+ "Good", otherwise "Keep practising".
- **Percentile** ("higher than 65% of the people…"): fixed copy taken from the design, not computed. The data holds one person's Result and nothing about other test takers, so there is nothing to compute it from.
