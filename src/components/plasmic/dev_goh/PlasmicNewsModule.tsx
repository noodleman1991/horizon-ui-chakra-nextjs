// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x1BtAZcYDoHQadMwGq1GLr
// Component: eDJ02ws47EHa

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import NewsCardLarge from "../../NewsCardLarge"; // plasmic-import: D7qJMaOYRZ5K/component
import NewsCardSmall from "../../NewsCardSmall"; // plasmic-import: 9xivxL9ZpqQa/component

import { useScreenVariants as useScreenVariantsxIrZdHvFaFjh } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: xIrZDHvFaFjh/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x1BtAZcYDoHQadMwGq1GLr/projectcss
import sty from "./PlasmicNewsModule.module.css"; // plasmic-import: eDJ02ws47EHa/css

createPlasmicElementProxy;

export type PlasmicNewsModule__VariantMembers = {};
export type PlasmicNewsModule__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewsModule__VariantsArgs;
export const PlasmicNewsModule__VariantProps = new Array<VariantPropType>();

export type PlasmicNewsModule__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicNewsModule__ArgsType;
export const PlasmicNewsModule__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicNewsModule__OverridesType = {
  news?: Flex__<"section">;
  section?: Flex__<"section">;
  newsCardLarge?: Flex__<typeof NewsCardLarge>;
};

export interface DefaultNewsModuleProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewsModule__RenderFunc(props: {
  variants: PlasmicNewsModule__VariantsArgs;
  args: PlasmicNewsModule__ArgsType;
  overrides: PlasmicNewsModule__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $translator = usePlasmicTranslator?.();
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsxIrZdHvFaFjh()
  });

  return (
    <section
      data-plasmic-name={"news"}
      data-plasmic-override={overrides.news}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.news
      )}
    >
      <div className={classNames(projectcss.all, sty.columns__fiB6)}>
        <div className={classNames(projectcss.all, sty.column__olqHj)}>
          <div className={classNames(projectcss.all, sty.columns__km1Hv)}>
            <div className={classNames(projectcss.all, sty.column__hjiwi)}>
              <div className={classNames(projectcss.all, sty.freeBox___0V2Hz)}>
                {renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vm549
                      )}
                    >
                      <Trans__>
                        {
                          <React.Fragment>
                            <React.Fragment>{"Latest "}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "var(--token-n-FzbhxKb_Pn)" }}
                            >
                              {"news"}
                            </span>
                            <React.Fragment>{" in the field"}</React.Fragment>
                          </React.Fragment>
                        }
                      </Trans__>
                    </div>
                  ),
                  value: args.slot,
                  className: classNames(sty.slotTargetSlot)
                })}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__eCbx)}>
                {renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ijNr
                      )}
                    >
                      <Trans__>
                        {
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 500 }}
                            >
                              {
                                "Keeping you up-to-date with the latest developments in the intersection of mental health and climate change research and policy."
                              }
                            </span>
                          </React.Fragment>
                        }
                      </Trans__>
                    </div>
                  ),
                  value: args.children,
                  className: classNames(sty.slotTargetChildren)
                })}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.column__m0Dxa)}>
              <div className={classNames(projectcss.all, sty.freeBox__onigk)}>
                {renderPlasmicSlot({
                  defaultContents: (
                    <AntdButton
                      className={classNames(
                        "__wab_instance",
                        sty.button___6Nst1
                      )}
                      danger={false}
                      ghost={false}
                      size={"small"}
                      type={"ghost"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__y46M
                        )}
                      >
                        <Trans__>{"View News"}</Trans__>
                      </div>
                    </AntdButton>
                  ),
                  value: args.slot2
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        data-plasmic-name={"section"}
        data-plasmic-override={overrides.section}
        className={classNames(projectcss.all, sty.section)}
      >
        <div className={classNames(projectcss.all, sty.columns__fPpF)}>
          <div className={classNames(projectcss.all, sty.column__frCCw)}>
            <NewsCardLarge
              data-plasmic-name={"newsCardLarge"}
              data-plasmic-override={overrides.newsCardLarge}
              className={classNames("__wab_instance", sty.newsCardLarge)}
              slot={
                <Trans__>
                  {
                    "Curabitur eget vestibulum arcu. Donec ultrices dui id nisi facilisis, et eleifend lectus imperdiet. In malesuada gravida mi nec volutpat. Proin feugiat sed mauris sed hendrerit. Nulla ut suscipit risus, sed placerat nibh. Cras ac ullamcorper dui. In hac habitasse platea dictumst."
                  }
                </Trans__>
              }
              slot2={
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___7DTbS)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"90%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"50%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/dev_goh/images/role1ResearchAgendapng.png",
                    fullWidth: 1125,
                    fullHeight: 633,
                    aspectRatio: undefined
                  }}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1DM2G
                )}
              >
                <Trans__>
                  {
                    "Climate change can make some people feel hopeless. Here's what can be done about it"
                  }
                </Trans__>
              </div>
            </NewsCardLarge>
          </div>
          <div className={classNames(projectcss.all, sty.column___7LCrx)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__n4Mr4)}
            >
              <NewsCardSmall
                className={classNames(
                  "__wab_instance",
                  sty.newsCardSmall__tMvrn
                )}
                slot2={
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__rgKFj)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"30%"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/dev_goh/images/role2OwnExperiencepng.png",
                      fullWidth: 1125,
                      fullHeight: 633,
                      aspectRatio: undefined
                    }}
                  />
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__axBtn
                  )}
                >
                  <Trans__>
                    {
                      "Does climate change affect your health? Short answer \u2014 yes"
                    }
                  </Trans__>
                </div>
              </NewsCardSmall>
              <NewsCardSmall
                className={classNames(
                  "__wab_instance",
                  sty.newsCardSmall__yvACs
                )}
                slot2={
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__ooHaA)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"30%"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/dev_goh/images/role4OnlineCommunitypng.png",
                      fullWidth: 1125,
                      fullHeight: 633,
                      aspectRatio: undefined
                    }}
                  />
                }
              >
                <Trans__>{"Q&A: How Do You Fight Climate Anxiety?"}</Trans__>
              </NewsCardSmall>
              <NewsCardSmall
                className={classNames(
                  "__wab_instance",
                  sty.newsCardSmall__iJvSd
                )}
                slot2={
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__deucV)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"30%"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/dev_goh/images/role5CaseStudypng.png",
                      fullWidth: 1125,
                      fullHeight: 633,
                      aspectRatio: undefined
                    }}
                  />
                }
              >
                <Trans__>{"Sustyvibes: Interview with the team"}</Trans__>
              </NewsCardSmall>
            </Stack__>
          </div>
        </div>
      </section>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  news: ["news", "section", "newsCardLarge"],
  section: ["section", "newsCardLarge"],
  newsCardLarge: ["newsCardLarge"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  news: "section";
  section: "section";
  newsCardLarge: typeof NewsCardLarge;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewsModule__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewsModule__VariantsArgs;
    args?: PlasmicNewsModule__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewsModule__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewsModule__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNewsModule__ArgProps,
          internalVariantPropNames: PlasmicNewsModule__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewsModule__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "news") {
    func.displayName = "PlasmicNewsModule";
  } else {
    func.displayName = `PlasmicNewsModule.${nodeName}`;
  }
  return func;
}

export const PlasmicNewsModule = Object.assign(
  // Top-level PlasmicNewsModule renders the root element
  makeNodeComponent("news"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    newsCardLarge: makeNodeComponent("newsCardLarge"),

    // Metadata about props expected for PlasmicNewsModule
    internalVariantProps: PlasmicNewsModule__VariantProps,
    internalArgProps: PlasmicNewsModule__ArgProps
  }
);

export default PlasmicNewsModule;
/* prettier-ignore-end */