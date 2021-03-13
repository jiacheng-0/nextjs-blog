---
title: "New Stonks in Python"
date: "2021-03-14"
---

# I've learnt something new in Python after 1 year

and that is the `nonlocal` keyword
which allows you to access a variable that is declared outside of the current scope/namespace.

Question is from https://www.hackerrank.com/challenges/making-anagrams/problem

## Pre-enlightenment code

Code is repetitive and long

```python
def makingAnagrams(s1, s2):

    '''
    approach:
        if a char c1 from s1 is not in s2,
            remove it from s1

        if a char c from s2 is not in s1,
            remove it from s2

        check if count of c matches

    pseudo:


    '''

    def build_dict(s):
        d_dict = {}
        for c in s:
            if c not in d_dict:
                d_dict[c] = 1
            else:
                d_dict[c] += 1
        return d_dict

    count = 0
    s1_dict = build_dict(s1)
    s2_dict = build_dict(s2)

    processed = set() # set of processed characters
    for c, c_times in s1_dict.items():

        if c not in processed:
            if c not in s2_dict:
                # process this
                count += c_times
                processed.add(c)

            # if appear also
            # check if different number of times appeared
            else:
                s2_c_times = s2_dict[c]
                count += abs(s2_c_times - c_times) # add the difference
                processed.add(c)

    s2_to_process = set(s2_dict.keys()) - processed
    for c, c_times in s2_dict.items():
        if c in s2_to_process:
            if c not in s1_dict:
                # process this
                count += c_times
                processed.add(c)

            # if appear also
            # check if different number of times appeared
            else:
                s1_c_times = s1_dict[c]
                count += abs(s1_c_times - c_times) # add the difference
                processed.add(c)
    print('s1', s1)
    print('s2', s2)
    return count
```

## Post-'nonlocal' enlightenment code

Repeated code is abstracted into function

```python
def makingAnagrams(s1, s2):

    """
    approach:
        if a char c1 from s1 is not in s2,
            remove it from s1

        if a char c from s2 is not in s1,
            remove it from s2

        check if count of c matches

    pseudo:

    """

    def build_dict(s):
        d_dict = {}
        for c in s:
            if c not in d_dict:
                d_dict[c] = 1
            else:
                d_dict[c] += 1
        return d_dict

    s1_dict = build_dict(s1)
    s2_dict = build_dict(s2)

    """
    write a function and reference non local variables
    """
    count = 0
    processed = set()  # set of processed characters

    def process_count(s1_dict, s2_dict):
        nonlocal count
        nonlocal processed
        for c, c_times in s1_dict.items():
            if c not in processed:
                if c not in s2_dict:
                    # process this
                    count += c_times
                    processed.add(c)
                    print(c, c_times, " times")

                # if appear, check if different number of times appeared
                else:
                    s2_c_times = s2_dict[c]
                    diff = abs(s2_c_times - c_times)
                    count += diff  # add the difference
                    processed.add(c)  # track this set
                    if diff != 0:
                        print(c, s2_c_times, " times")

    process_count(s1_dict, s2_dict)
    process_count(s2_dict, s1_dict)
    return count
```

Take note of the 2 times `nonlocal` is used in the later code

TEEHEE :P
