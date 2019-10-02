#!/usr/bin/env python

import yamale
import os
from colorama import Fore, Style

test_dir = os.path.dirname(os.path.abspath(__file__))
test_data_dir = os.path.join(test_dir, 'data')
prod_data = os.path.join(test_dir, '..', '_data', 'data.yml')
schema_file = os.path.join(test_dir, 'yamale_schema.yml')
schema = yamale.make_schema(schema_file)

tests = [
    [True,  'test_data.yml'],
    [False, 'test_01_projects_vs_project.yml'],
    [False, 'test_02_project_list_vs_str.yml'],
    [False, 'test_03_misspelled_alias.yml'],
    [False, 'test_04_unescaped_quotes.yml'],
    [False, 'test_05_alias_instead_of_str.yml']
    ]

n_fails = 0
for [should_pass, filename] in tests:
    did_pass = True
    try:
        yamale.validate(schema, yamale.make_data(os.path.join(test_data_dir, filename)))
    except Exception as e:
        did_pass = False

    if did_pass == should_pass:
        print("Pass: " + filename)
    else:
        n_fails += 1
        print("Fail: " + filename)

if n_fails == 0:
    print("Regression tests passed")
else:
    print(str(n_fails) + " regressions failed")


print()
print("Testing production data...")
try:
    yamale.validate(schema, yamale.make_data(prod_data))
except Exception as e:
    print(Fore.YELLOW + str(e) + Style.RESET_ALL)
else:
    print("No errors found in production data!")
