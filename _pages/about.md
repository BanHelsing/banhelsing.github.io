---
permalink: /
title: "About myself"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Computer Science Engineer about to graduate from Universidad Técnica Federico Santa María (UTFSM). I co-authored the research paper "Advances improved quantum genetic algorithms: methods, impact and future challenges," published in the DYNA journal in 2025. My work specializes in Improved Quantum Genetic Algorithms (IQGA), an approach that applies quantum computing to genetic algorithms (GAs) to optimize performance in complex domains. My research focuses on leveraging quantum parallelism and superposition to reduce the time complexity of genetic operations. Currently, I apply my background in optimization and artificial intelligence to industrial challenges, specifically in mining and software engineering.

Research Overview (IQGA)
======
My research presents a comprehensive analysis of the Improved Quantum Genetic Algorithm (IQGA). This algorithm utilizes quantum bits (qubits) for information storage, which can exist in a superposition of states unlike classical chromosomes. A qubit is mathematically defined as:

$$
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
$$

where the probability amplitudes satisfy the equation:

$$
\alpha^2 + \beta^2 = 1
$$

The algorithm utilizes quantum rotation gates to update chromosomes and guide them toward optimal solutions by adjusting the probability amplitudes. The rotation gate U(θi​) is defined as:

$$
U(θ_i) = \begin{pmatrix}
\cos(θ_i/2) & -\sin(θ_i/2) \\
\sin(θ_i/2) & \cos(θ_i/2)
\end{pmatrix}
$$

A key advantage of this approach is the potential integration of Grover's algorithm, which reduces search complexity from $O(n)$ to $O(\sqrt{n})$.

By using quantum parallelism, the algorithm can evaluate multiple chromosomes simultaneously, leading to a significant reduction in the number of evaluations required to find an optimal solution.

Tech Stack
======
1. Programming Languages: C++, Java, Go, Python.

2. Engineering & DevOps: Docker, Protobuf.

3. Core Domains: Quantum Computing, Metaheuristic Optimization, AI-driven Video Analysis (BlastDynamics), Stochastic Search.
