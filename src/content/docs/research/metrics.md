---
title: Metrics used for data utility and privacy simultaneously 
sidebar:
    order: 1
---

What is K-anonymity?
Key principle:
A dataset is considered k-anonymous if, for every combination of identifying attributes in the dataset, there are at least k-1 other individuals with the same attributes. In simpler terms, each record should be indistinguishable from at least k-1 other records based on the identifying information available.

Achieving K-Anonymity
Generalization: Replacing specific values with more general ones (e.g., replacing city with state).
Suppression: Removing identifying attributes altogether.
Perturbation: Adding slight random noise to certain values.

Limitations
K-anonymity is not foolproof, and it's still possible to re-identify individuals depending on the available background information and the specific implementation.
Achieving a higher level of k-anonymity (larger k) often leads to significant data loss or reduced utility, limiting its applications.

Variants
l-diversity: Requires each group of k individuals to have at least l different values for a sensitive attribute.
t-closeness: Requires the distribution of sensitive attributes within each group of k individuals to be statistically indistinguishable from the overall distribution.

Related
K-Map
k-Map model is capable of considering another dataset, in addition to the original one, in order to achieve the privacy requirement







