#!/usr/bin/env python3

import yamale

test_dir = './'
data_dir = test_dir+'data/'
schema = yamale.make_schema(test_dir+'yamale_schema.yml')

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
        yamale.validate(schema, yamale.make_data(data_dir+filename))
    except Exception as e:
        did_pass = False

    if did_pass == should_pass:
        print("Pass: " + filename)
    else:
        n_fails += 1
        print("Fail: " + filename)

if n_fails == 0:
    print("All tests passed")
else:
    print(str(n_fails) + " tests failed")


print()
print("Testing production data...")
yamale.validate(schema, yamale.make_data('../_data/data.yml'))
print("No errors found in production data!")
